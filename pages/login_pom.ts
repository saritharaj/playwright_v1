import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
    //readonly is a TypeScript modifier.
    //Playwright gives us its own types too: Page:Locator:Browser
    //readonly>Once a value is assigned to this property, you cannot assign a new value to that property.
    readonly page: Page;

    //The real value is set later inside the constructor
    readonly inputField: Locator;
    readonly errorMessage: Locator;
    readonly sortDropdown: Locator;
    readonly title: Locator;


    //

    constructor(page: Page) {
        this.page = page;
        this.inputField = page.locator('div');
        this.errorMessage = page.locator('h3[data-test="error"]');
        this.sortDropdown = page.locator('[data-test="product-sort-container"]');
        this.title = page.locator('span[data-test="title"]');

    }
    async navigateTo(url: string) {
        await this.page.goto(url)


    }
    async enterText(id: string, value: string) {
        await this.inputField.locator(`input[id="${id}"]`).fill(value);
    }
    async clickLogIn() {
        await this.page.locator('input[id="login-button"]').click();
    }
    async selectSortOption(value: string) {
        await this.sortDropdown.selectOption(value)
    }
}
