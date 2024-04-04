import { Page, expect } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";

export class LandingPage {

    constructor(public page: Page){
        pageFixture.page = page;
    }

    landingPageLocators = {
        usernameField:()=> pageFixture.page.locator("//form[contains(@name,'login')]//input[contains(@name,'username')]"),
        passwordField:()=> pageFixture.page.locator("//form[contains(@name,'login')]//input[contains(@name,'password')]"),
        loginBtn:()=> pageFixture.page.locator("//input[contains(@value,'Log In')]"),
        loginPara:()=> pageFixture.page.locator("//p[contains(@class,'smallText')]")
    }

    public async loginUser(username: string, password:string):Promise<void> {
        await this.landingPageLocators.usernameField().type(username);
        await this.landingPageLocators.passwordField().type(password);
        await this.landingPageLocators.loginBtn().click();
    }

    public async isUserLoggedIn():Promise<void>{
        const assertLogin = await this.landingPageLocators.loginPara();
        expect(assertLogin).toContainText('Welcome')
    }

    

}