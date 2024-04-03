import { Page } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";

export class LandingPage {

    constructor(public page: Page){
        pageFixture.page = page;
    }

    landingPageLocators = {
        usernameField:()=> pageFixture.page.locator("//form[contains(@name,'login')]//input[contains(@name,'username')]"),
        passwordField:()=> pageFixture.page.locator("//form[contains(@name,'login')]//input[contains(@name,'password')]")
    }

    public async loginUser(username: string, password:string):Promise<void> {
        await this.landingPageLocators.usernameField().type(username);
        await this.landingPageLocators.passwordField().type(password);
    }

    

}