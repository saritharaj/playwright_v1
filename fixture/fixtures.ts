import{test as base} from "@playwright/test";
import{ LoginPage} from "../pages/login_pom";
import { productPage } from "../pages/product_pom";
export { expect } from '@playwright/test';
type MyFixtures={
    login:LoginPage;
    products:productPage;

};
export const test=base.extend<MyFixtures>({
    login: async({page},use)=>{
        const loginPage=new LoginPage(page)
        await use(loginPage)
    },

    products:async({page},use)=>{
    const productsPage=new productPage(page)
    await use(productsPage)
}

}

);