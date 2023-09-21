//import { test , expect } from '@playwright/test';
//import { Login } from './credentials';
//let cr =new Login ();
//
//
//test.describe('Basic features of Monitor setup screen' , ()=> {
//
//    test('Add monitor' , async ({page,browser}) => {
//
//    //login steps    
//
//    await page.goto(cr.url);
//    await page.locator("#userName").click();
//    await page.locator("#userName").fill(cr.username);
//    await page.locator("#password").click();
//    await page.locator("#password").fill(cr.password);
//    await page.locator('[type="submit"]').click();
//    //wait for dashboard to load
//    await page.waitForURL(cr.dashboard);
//    await page.waitForLoadState("domcontentloaded");
//    //direct navigation to monitor setup page
//    await page.goto('http://backoffice-systemtest.andalusiagroup.net:8090/queuing-management/setups/monitors-setup');
//    //Add new monitor
//    await page.locator("#AddNewMonitorBtn").click();
//    await page.locator("#NameInput").click();
//    await page.locator("#NameInput").fill('nada monitor');
//    //click save
//    await page.locator('.k-grid-update').click();
//    //filter for specific item (nada monitor)
//    await page.locator('[title="Monitor Name"]').click();
//    await page.locator('[title="Monitor Name"]').fill('nada monitor');
//    await page.locator('[title="Monitor Name"]').press('Enter');
//    
//    //Assertion
//    const newMonitor=page.getByRole('gridcell', { name: 'nada monitor' });
//    await expect(newMonitor).toHaveText("nada monitor");
//    
//});
//
//
//
//test('Edit monitor' , async ({page}) => {
//    
//    //await page.pause();
//    //login steps
//    await page.goto(cr.url);
//    await page.locator("#userName").click();
//    await page.locator("#userName").fill(cr.username);
//    await page.locator("#password").click();
//    await page.locator("#password").fill(cr.password);
//    await page.locator('[type="submit"]').click();
//    //wait for dashboard to load
//    await page.waitForURL(cr.dashboard);
//    await page.waitForLoadState("domcontentloaded");
//    //direct navigation to monitor setup page
//    await page.goto('http://backoffice-systemtest.andalusiagroup.net:8090/queuing-management/setups/monitors-setup');
//    //filter for specific item (nada monitor)
//    await page.locator('[title="Monitor Name"]').click();
//    await page.locator('[title="Monitor Name"]').fill('nada monitor');
//    await page.locator('[title="Monitor Name"]').press('Enter');
//
//    //clicking edit button
//    await page.locator('.k-grid-edit').click();
//    //clicking inside field
//    await page.locator("#NameInput").click();
//    //editing from (nada monitor) to (dummy monitor)
//    await page.locator("#NameInput").click({ clickCount: 3});
//    await page.locator("#NameInput").fill('dummy monitor');
//    //click Save button
//    await page.locator('.k-grid-update').click();
//    //filter for specific item (dummy monitor)
//    await page.locator('[title="Monitor Name"]').click();
//    await page.locator('[title="Monitor Name"]').fill('dummy monitor');
//    await page.locator('[title="Monitor Name"]').press('Enter');
//
//    //Assertion
//    //const newMonitor=page.locator("#monitorListGrid_active_cell");
//    //await expect(newMonitor).toContainText('dummy monitor');
//    const newMonitor=page.getByRole('gridcell', { name: 'dummy monitor' });
//    await expect(newMonitor).toHaveText("dummy monitor");
//
//});
//
//
//test('Delete monitor' , async ({page}) => {
//    
//    //await page.pause();
//    //login steps
//    await page.goto(cr.url);
//    await page.locator("#userName").click();
//    await page.locator("#userName").fill(cr.username);
//    await page.locator("#password").click();
//    await page.locator("#password").fill(cr.password);
//    await page.locator('[type="submit"]').click();
//    //wait for dashboard to load
//    await page.waitForURL(cr.dashboard);
//    await page.waitForLoadState("domcontentloaded");
//    //direct navigation to monitor setup page
//    await page.goto('http://backoffice-systemtest.andalusiagroup.net:8090/queuing-management/setups/monitors-setup');
//    //filter for specific item (nada monitor)
//    await page.locator('[title="Monitor Name"]').click();
//    await page.locator('[title="Monitor Name"]').fill('dummy monitor');
//    await page.locator('[title="Monitor Name"]').press('Enter');
//    
//    //clicking delete button
//    await page.locator('.k-grid-deleterow').click();
//    //clicking delete button in the popup
//    //await page.locator('.btn btn-danger').click();   => //does not work :(
//    await page.locator('#modal-scopeddelete-monitor___BV_modal_footer_').getByRole('button', { name: 'Delete' }).click(); 
//    //filter for specific item (dummy monitor)
//    await page.locator('[title="Monitor Name"]').click();
//    await page.locator('[title="Monitor Name"]').fill('dummy monitor');
//    await page.locator('[title="Monitor Name"]').press('Enter')    
//    //asertion
//    //await page.pause();
//    const newMonitor=page.locator('#monitorListGrid .nodata-img');
//    await expect(newMonitor).toBeVisible();
//
//});
//
//});