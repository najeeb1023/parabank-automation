import { Page } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";

export class LandingPage {

    landingPageLocators = {
        usernameField:()=> pageFixture.page.locator("//input[contains(@name,'username')]"),
        passwordField:()=> pageFixture.page.locator("//input[contains(@name,'password')]")
    }

    public async loginUser(username: string, password:string):Promise<void> {
        await this.landingPageLocators.usernameField().type(username);
        await this.landingPageLocators.usernameField().type(password);
    }

    constructor(public page: Page){
        pageFixture.page = page;
    }

}