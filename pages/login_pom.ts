import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
    //readonly is a TypeScript modifier.
    //Playwright gives us its own types too: Page:Locator:Browser
    //readonly>Once a value is assigned to this property, you cannot assign a new value to that property.
    readonly page: Page;
    
    //The real value is set later inside the constructor
    readonly inputField: Locator;
    

//

    constructor(page: Page) {
        this.page = page;
        this.inputField = page.locator('div');

    }
    async navigateTo(url:string){
        await this.page.goto(url)


    }
    async enterText(id:string, value:string) {
        await this.inputField.locator(`input[id="${id}"]`).fill(value);
    }

}
