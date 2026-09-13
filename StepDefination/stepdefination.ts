import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, Page } from "@playwright/test";

let page: Page;
let browser: any;

Given("I open the login page", async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  await page.goto("https://www.saucedemo.com/");
});

When("I enter username {string}", async function (username: string) {
  await page.fill("#user-name", username);
});

When("I enter password {string}", async function (password: string) {
  await page.fill("#password", password);
});

When("I click the login button", async function () {
  await page.click("#login-button");
});

Then("I should see the products page", async function () {
  await page.waitForURL("**/inventory.html");
  console.log("Login successful");
  await browser.close();
});