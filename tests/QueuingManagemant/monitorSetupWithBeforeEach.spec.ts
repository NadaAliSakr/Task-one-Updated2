import { test , expect } from '@playwright/test';
import {Login} from './credentials' ;
let cr=new Login();
//const dynamicValue = Math.random().toString(36).substring(2,7);
const dynamicValue = Date.now().toString();


test.describe('Basic features of Monitor setup screen' , ()=> {
   
test.beforeEach(async ({ page }) => {
    //login steps    
    await page.goto(cr.url);
    await page.locator("#userName").click();
    await page.locator("#userName").fill(cr.username);
    await page.locator("#password").click();
    await page.locator("#password").fill(cr.password);
    await page.locator('[type="submit"]').click();  
    //wait for dashboard to load
    await page.waitForURL(cr.dashboard);
    await page.waitForLoadState("domcontentloaded");
    //direct navigation to monitor setup page
    await page.goto('http://backoffice-systemtest.andalusiagroup.net:8090/queuing-management/setups/monitors-setup');
    });

test('Add monitor' , async ({page,browser}) => {
 
    //Add new monitor
    await page.locator("#AddNewMonitorBtn").click();
    await page.locator("#NameInput").click();
    await page.locator("#NameInput").fill('monitor'+dynamicValue);
    //click save
    await page.locator('.k-grid-update').click();
    //filter for specific item ('monitor' +dynamicValue)
    await page.locator('[title="Monitor Name"]').click();
    await page.locator('[title="Monitor Name"]').fill('monitor'+dynamicValue);
    await page.locator('[title="Monitor Name"]').press('Enter');
    
    //Assertion
    const newMonitor=page.getByRole('gridcell', { name: 'monitor'+dynamicValue });
    await expect(newMonitor).toHaveText('monitor'+dynamicValue);
    
    });



test('Edit monitor' , async ({page}) => {
    
    //await page.pause();


           //filter for specific item ('monitor'+dynamicValue)
           await page.locator('[title="Monitor Name"]').click();
           await page.locator('[title="Monitor Name"]').fill('monitor'+dynamicValue);
           await page.locator('[title="Monitor Name"]').press('Enter');

 
    //clicking edit button
    await page.locator('.k-grid-edit').click();
    //clicking inside field
    await page.locator("#NameInput").click();
    //editing from ('monitor'+dynamicValue) to ('monitor'+dynamicValue+'Edited')
    await page.locator("#NameInput").click({ clickCount: 3});
    await page.locator("#NameInput").fill('monitor'+dynamicValue+'Edited');
    //click Save button
    await page.locator('.k-grid-update').click();
    //filter for specific item ('monitor'+dynamicValue+'Edited')
    await page.locator('[title="Monitor Name"]').click();
    await page.locator('[title="Monitor Name"]').fill('monitor'+dynamicValue+'Edited');
    await page.locator('[title="Monitor Name"]').press('Enter');

    //Assertion
    //const newMonitor=page.locator("#monitorListGrid_active_cell");
    //await expect(newMonitor).toContainText('monitor'+dynamicValue+'Edited');
    const newMonitor=page.getByRole('gridcell', { name: 'monitor'+dynamicValue+'Edited' });
    await expect(newMonitor).toHaveText('monitor'+dynamicValue+'Edited');

    });


test('Delete monitor' , async ({page}) => {
    
    //await page.pause();


               //filter for specific item ('monitor'+dynamicValue+'Edited')
               await page.locator('[title="Monitor Name"]').click();
               await page.locator('[title="Monitor Name"]').fill('monitor'+dynamicValue+'Edited');
               await page.locator('[title="Monitor Name"]').press('Enter');

  
    //clicking delete button
    await page.locator('.k-grid-deleterow').click();
    //clicking delete button in the popup
    //await page.locator('.btn btn-danger').click();   => //does not work :(
    await page.locator('#modal-scopeddelete-monitor___BV_modal_footer_').getByRole('button', { name: 'Delete' }).click(); 
    //filter for specific item ('monitor'+dynamicValue+'Edited')
    await page.locator('[title="Monitor Name"]').click();
    await page.locator('[title="Monitor Name"]').fill('monitor'+dynamicValue+'Edited');
    await page.locator('[title="Monitor Name"]').press('Enter')    
    //asertion
    //await page.pause();
    const newMonitor=page.locator('#monitorListGrid .nodata-img');
    await expect(newMonitor).toBeVisible();

    });

});
