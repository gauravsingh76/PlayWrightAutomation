const {test,expect}=require('@playwright/test');
const userEmailValue="gauravsingh5@gmail.com";
const userPasswordValue="Queen@243";
const loginUrlPage= "https://rahulshettyacademy.com/client/#/auth/login";
const cardNumber="4542 9931 9292 2293";
const cvvNumber="123";
const cardName="Gaurav Singh";
const couponCode="rahulshettyacademy";
const expiryMonth='09';
const expiryYear='29';

test('Add to Cart and OC Detail', async({page})=>{
    const productName='ZARA COAT 3';
    const products=page.locator(".card-body");

    await page.goto(loginUrlPage);
    await page.locator('#userEmail').fill(userEmailValue);
    await page.locator('#userPassword').fill(userPasswordValue);
    await page.locator('#login').click();
    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
    const titlesOfProduct=await page.locator(".card-body b").allTextContents();
    console.log("Product Available = "+titlesOfProduct);
    const countOfProducts=await products.count();
    //Choose product ZARA COAT 3
    for(let i=0;i<countOfProducts;++i){
        if(await products.nth(i).locator('b').textContent()===productName){
            //Add to Cart 
            await products.nth(i).locator("text= Add To Cart").click();
            break;
        }
    }
    await page.pause();
});