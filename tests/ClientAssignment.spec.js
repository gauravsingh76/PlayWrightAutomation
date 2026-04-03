const {test,expect} = require('@playwright/test');

//Create a Variable for UserEmail, Password and LoginURL
const userEmailValue="gauravsingh5@gmail.com";
const userPasswordValue="Queen@243";
const loginUrlPage="https://rahulshettyacademy.com/client/#/auth/login";

test('Client WebPage Assignment - Register User', async ({page})=>
{
    //Navigate to the Rahul Shetty WebSite
    await page.goto(loginUrlPage); 

    //Register the User
    await page.locator("[class='text-reset']").click(); // Click on register
    await page.locator('#firstName').fill("Gaurav"); //Enter First Name
    await page.locator('#lastName').fill("Singh"); // Enter Last Name
    await page.locator('#userEmail').fill(userEmailValue); //Enter the EmailID
    await page.locator('#userMobile').fill("9898989898"); //Enter the Password
    await page.locator("[value='Male']").click(); //Check the Radio of Male
    await page.locator("[class*='custom-select']").click(); //Click on Occupation Box
    //await page.locator("[value='3: Engineer']").click(); //Select Engineer from Occupation Box
    await page.locator('#userPassword').fill(userPasswordValue); //Enter the Password
    await page.locator('#confirmPassword').fill(userPasswordValue); //Enter the Password
    await page.locator("[type='checkbox']").click(); //Click on Checkbox
    await page.locator('#login').click(); // Click on Register Button
    await page.locator("[class='btn btn-primary']").click();
});

test.only('Login with above creds or existing account', async({page})=>{
    const allProductList=page.locator(".card-body b");
    //Login
    await page.goto(loginUrlPage);
    await page.locator('#userEmail').fill(userEmailValue);
    await page.locator('#userPassword').fill(userPasswordValue);
    await page.locator('#login').click();
    //await page.waitForTimeout(10000); //Wait External 10 sec after login

    //Fetch the First Product Name and Validate
    await page.waitForLoadState('networkidle'); //Wait for the network to be idle after page load. It will wait until all the network request is completed after page load.
    await page.locator(".card-body b").first().isDisabled();
    const listOfAllProduct=await page.locator(".card-body b").allTextContents();
    console.log(listOfAllProduct);

    //Validate the first product name
    const countOfList=await allProductList.count();
    console.log("Count of String = "+countOfList);
    for(let i=0; i<countOfList;i++){
        const fetchProductName=await allProductList.nth(i).textContent();
        console.log(fetchProductName);
        if (fetchProductName === "ADIDAS ORIGINAL"){
            console.log("ADIDAS ORIGINAL is present in the List");
            break;
        }
    }
});