import{test,expect} from '@playwright/test';
import { LoginPage } from '../pages/login_pom';
import { productPage } from '../pages/product_pom';
import Data from '../fixture/login.json';
let login:LoginPage;
let products:productPage;
 test('user can add product to cart',async({page})=>{
    login=new LoginPage(page);
    products=new productPage(page);
    await login.navigateTo(Data.base_Url);
    await login.enterText('user-name',Data.valid_Username);
    await login.enterText('password',Data.valid_Password);
    await page.locator('input[id="login-button"]').click();
    await products.addFirstProductToCart();
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

 
 });