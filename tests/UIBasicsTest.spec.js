// import test from @playwright/test
const {test,expect} = require('@playwright/test');
//For documents of assertion Go to "https://playwright.dev/docs/test-assertions"
//test('My First Playwright Test', async function()
//{
    //By Default javascript is asyncornous, to handle we have to add await in each steps.
    //To activate await we need to add "async" with function. i.e, async function()
    // In latest javascript, function() is not added so it by default act as a anonimous function.
    // So, we can also write "test('My First Playwright Test', async function()" as "test('My First Playwright Test', async ()=>" to make it light code.
//}); 

// test.only('Particular Playwright Test', async({page})=>
// {
//     //{page} = Fixtures
//     //test.only = Run a specific test only where 'only" is mentioned.
//     await page.goto("https://www.google.com/");
//     //get title - assertion
//     console.log(await page.title()); // it will fetch the title and print the title in console.
//     await expect(page).toHaveTitle("Google");
// });

// test('Page Playwright Test', async({page})=>
// {
//     //{page} = Fixtures
//     await page.goto("https://www.google.com/"); //Navigate to the desired browser.
//     //If we add a "page" fixtures with browser in function. We dont need to call "newContent" or"newPage"
//     //By default it will open a fresh instace and Open the browser.
//     //get title - assertion
//     console.log(await page.title()); // it will fetch the title and print the title in console.
//     await expect(page).toHaveTitle("Google");
// });

// {browser} is defined under "playwright.config.js" file. either chrome, or others browser.
// {browser} is a feature, which is used to invoke browser global to all "test". 
test('Broswer Context Playwright Test', async({browser})=>
{
    //{browser} = Fixtures
    const context=await browser.newContext(); //Open a fresh Browser. and Storing the browser in context variable.
    const page=await context.newPage(); //Open a new Page in the browser.
    const userName=page.locator('#username');
    const password=page.locator("[type='password']")
    const signIn=page.locator("#signInBtn");

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/"); //Navigate to the desired browser.
    console.log(await page.title()); // it will fetch the title and print the title in console.
    //css, xpath - Recommended use CSS
    await userName.fill("rahulshetty"); //to enter data - "fill".
    await password.fill("Learning@830$3mK2"); //to enter data - "fill".
    await signIn.click(); //to click on button.
    console.log(await page.locator("[style*='block']").textContent()); // Extract the text from webpage.
    await expect(page.locator("[style*='block']")).toContainText('Incorrect'); //check to have a partial text.

    await userName.fill(""); //Enter will erase the entered value
    await userName.fill("rahulshettyacademy");
    await signIn.click();

    console.log(await page.locator(".card-body a").first().textContent()); // if multiple matching, then it will find the first element.
    console.log(await page.locator(".card-body a").nth(0).textContent()); // if multiple matching, then it will find the nth(0) element i.e., 0 index.
    console.log(await page.locator(".card-body a").nth(1).textContent()); // if multiple matching, then it will find the nth(0) element i.e., 1 index.
    //if want to fetch all the text
    const allTitle=await page.locator(".card-body a").allTextContents();
    console.log(allTitle);
    // allTextContents - By default it will return in array and driver will not wait to load all the text. And it will return zero element.
});