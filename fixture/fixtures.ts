import{test as base} from "@playwright/test";
import{ LoginPage} from "../pages/login_pom";
export { expect } from '@playwright/test';
type MyFixtures={
    login:LoginPage;

};
export const test=base.extend<MyFixtures>({
    login: async({page},use)=>{
        const loginPage=new LoginPage(page)
        await use(loginPage)
    }
});