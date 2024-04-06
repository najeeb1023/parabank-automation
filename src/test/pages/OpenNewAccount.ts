import { Page, expect } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";

export class NewAccount {

    constructor(public page: Page){
        pageFixture.page = page;
    };

    newAccLocators = {
        newAccTab:()=> pageFixture.page.locator("//div[contains(@id,'leftPanel')]//li[1]"),
        newAccHeading:()=> pageFixture.page.locator("//div[contains(@id,'rightPanel')]//h1")
    };

    public async navigateToOpenNewAcc() {
        await this.newAccLocators.newAccTab().click();
        await expect(this.newAccLocators.newAccHeading()).toHaveText('Open New Account');
    };
};