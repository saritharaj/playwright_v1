import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login_pom';
import Data from '../fixture/login.json';

let login:LoginPage;
test.beforeEach(async ({ page }) => {
 login=new LoginPage(page);
});
 
test('sucessfull login', async({page})=>{
await login.navigateTo(Data.base_Url);
await login.enterText('user-name', Data.valid_Username);
await login.enterText('password', Data.valid_Password);
await page.locator('input[id="login-button"]').click();
await expect(page.locator('span[data-test="title"]')).toHaveText('Products');

});
test('invalid login',async({page})=>{
    await login.navigateTo(Data.base_Url);
    await login.enterText('user-name', Data.invalid_Username);
    await login.enterText('password', Data.invalid_Password);
    await page.locator('input[id="login-button"]').click();
    await expect(page.locator('h3[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service');
});
