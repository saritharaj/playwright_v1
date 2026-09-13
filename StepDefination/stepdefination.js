const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');

let page;
let browser;

Given('I open the login page', async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  await page.goto('https://www.saucedemo.com/');
});

When('I enter username {string}', async function (username) {
  await page.fill('#user-name', username);
});

When('I enter password {string}', async function (password) {
  await page.fill('#password', password);
});

When('I click the login button', async function () {
  await page.click('#login-button');
});

Then('I should see the products page', async function () {
  await page.waitForURL('**/inventory.html');
  console.log('Login successful');
  await browser.close();
});
