const {test,expect} = require('@playwright/test');

test('My First Playwright Test', async({page})=>{

    await page.goto("https://www.google.com/");
    //await expect()
    expect (await page.title()).toContain("Google");
     //Navigate to the desired browser.
});