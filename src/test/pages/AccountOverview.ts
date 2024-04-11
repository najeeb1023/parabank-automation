import { Page, expect } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";
import { PageElement } from "../resources/interfaces/iPageElement";
import * as accOverviewLocators from "../resources/accOverviewLocators.json";

    function getResource(resourceName: string){
        return accOverviewLocators.webElements.find((element: PageElement) => element.elementName == resourceName) as PageElement
    };
export class AccountOverview {

    constructor(public page: Page){
        pageFixture.page = page;
    };

    accountOverviewLocators = {
        accountTab:()=> pageFixture.page.locator(getResource('accountTab').selectorValue),
        accountHeading:()=> pageFixture.page.locator(getResource('accountHeading').selectorValue),
        accountColumn:()=> pageFixture.page.locator(getResource('accountColumn').selectorValue),
        accountNumber:()=> pageFixture.page.locator(getResource('accountNumber').selectorValue),
        accountBal:()=> pageFixture.page.locator(getResource('accountBal').selectorValue),
        availAmount:()=> pageFixture.page.locator(getResource('availAmount').selectorValue),
        totalBal:()=> pageFixture.page.locator(getResource('totalBal').selectorValue)
    };

    public async navigateToAccountOverview ():Promise<void> {
        await this.accountOverviewLocators.accountTab().click();
        await expect(this.accountOverviewLocators.accountHeading()).toBeVisible();
    };

    public async getAccountNumber ():Promise<void> {
        const accountHeading = await this.accountOverviewLocators.accountColumn().textContent();
        const accountNumber = await this.accountOverviewLocators.accountNumber().textContent();
        const accountBalance = await this.accountOverviewLocators.accountBal().textContent();
        const availableAccBalance = await this.accountOverviewLocators.availAmount().textContent();
        const totalAccBal = await this.accountOverviewLocators.totalBal().textContent();
        console.log("\n" + ("    ") + accountHeading + " number: " + accountNumber.trim());
        console.log(("    ") + "Account balance: " + accountBalance.trim());
        console.log(("    ") + "Available balance: " + availableAccBalance.trim());
        console.log(("    ") + totalAccBal.trim());
    };
};