import { Page } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";

export class AccountOverview {

    constructor(public page: Page){
        pageFixture.page = page;
    }

    accountOverviewLocators = {
        accountTab:()=> pageFixture.page.locator("//div[contains(@id,'leftPanel')]//li[2]")
    }

    public async navigateToAccountOverview ():Promise<void> {
        await this.accountOverviewLocators.accountTab().click();
    }


}