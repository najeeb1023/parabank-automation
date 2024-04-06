import { Page, expect } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";

export class AccountOverview {

    constructor(public page: Page){
        pageFixture.page = page;
    }

    accountOverviewLocators = {
        accountTab:()=> pageFixture.page.locator("//div[contains(@id,'leftPanel')]//li[2]"),
        accountHeading:()=> pageFixture.page.locator("//div[contains(@id,'rightPanel')]//h1"),
        accountColumn:()=> pageFixture.page.locator("//div[contains(@id,'rightPanel')]//table//th[1]"),
        accountNumber:()=> pageFixture.page.locator("//div[contains(@id,'rightPanel')]//tbody//tr//a[1]"),
        accountBal:()=> pageFixture.page.locator("//div[contains(@id,'rightPanel')]//tbody//tr[1]//td[2]"),
        availAmount:()=> pageFixture.page.locator("//div[contains(@id,'rightPanel')]//tbody//tr[1]//td[3]"),
        totalBal:()=> pageFixture.page.locator("//div[contains(@id,'rightPanel')]//tbody//tr[2]")

    }

    public async navigateToAccountOverview ():Promise<void> {
        await this.accountOverviewLocators.accountTab().click();
        await expect(this.accountOverviewLocators.accountHeading()).toBeVisible();
    }

    public async getAccountNumber ():Promise<void> {
        const accountHeading = await this.accountOverviewLocators.accountColumn().textContent();
        const accountNumber = await this.accountOverviewLocators.accountNumber().textContent();
        const accountBalance = await this.accountOverviewLocators.accountBal().textContent();
        const availableAccBalance = await this.accountOverviewLocators.availAmount().textContent();
        const totalAccBal = await this.accountOverviewLocators.totalBal().textContent();
        process.stdout.write(accountHeading + " number: " + `${accountNumber}`);
        process.stdout.write("\n" + "Account balance: " + `${accountBalance}`);
        process.stdout.write("\n" + "Available balance: " + `${availableAccBalance}`);
        process.stdout.write("\n" + `${totalAccBal}`);
    }


}