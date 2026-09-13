import { test, expect } from '@playwright/test';
import Data from '../fixture/login1.json';
test('Login Test', async ({ page }) => {
   await page.goto(Data.url);
    await page.fill('[id="user-name"]',Data.username);
    await page.fill('[id="password"]',Data.password);
    await page.click('[id="login-button"]');
    await expect(page.locator('span[data-test="title"]')).toHaveText('Products');

})