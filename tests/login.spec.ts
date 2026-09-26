//import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login_pom';
//import Data from '../fixture/login.json';
import { takeScreenshot } from '../utils/commonUtils';
import { readExcel } from '../utils/excelReader';
import { test, expect } from '../fixture/fixtures';

const testData = readExcel('./testData/LoginData.xlsx', 'Sheet1')
console.log(testData);

// let login:LoginPage;
// test.beforeEach(async ({ page }) => {
//  login=new LoginPage(page);
// });

for (const user of testData) {
    test(`sucessfull login -${user.username}`, async ({ login}) => {
        await login.navigateTo(process.env.BASE_URL!);
        await login.enterText('user-name', user.username);
        await login.enterText('password', user.password);
        await login.clickLogIn();
        //await page.locator('input[id="login-button"]').click();
        await expect(login.title).toHaveText('Products');

        await takeScreenshot(login.page, 'sucessfull login');

    })
};
test('invalid login', async ({ login }) => {
    await login.navigateTo(process.env.BASE_URL);
    await login.enterText('user-name', process.env.INVALID_USERNAME!);
    await login.enterText('password', process.env.INVALID_PASSWORD!);
    await login.clickLogIn();
    //await page.locator('input[id="login-button"]').click();
    await expect(login.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
    //await takeScreenshot(page,'invalid login');
});

test('Verify Sort Funtionality', async ({ login }) => {
    await login.navigateTo(process.env.BASE_URL!);
    await login.enterText('user-name', process.env.VALID_USERNAME!);
    await login.enterText('password', process.env.VALID_PASSWORD!);
    await login.clickLogIn();
    //await page.locator('input[id="login-button"]').click();
    await login.sortDropdown.selectOption('lohi');
    await expect(login.sortDropdown).toHaveValue('lohi');


})