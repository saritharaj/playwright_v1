import {Page,Locator  } from '@playwright/test';
 export class productPage{
    readonly page :Page;
    readonly productCards: Locator;

    constructor(page:Page){
        this.page=page;
        this.productCards=page.locator('.inventory_item')
    }

async addFirstProductToCart(){

    await this.productCards.first().locator('button').click();
}

}



 