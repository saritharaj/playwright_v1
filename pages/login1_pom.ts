import { Page,Locator } from "@playwright/test";
export class LoginPage{
readonly page:Page;
readonly inputField:Locator;

constructor(page:Page){
    this.page=page;
    this.inputField=page.locator('div');
}
async navigateTo(url:string){

}
