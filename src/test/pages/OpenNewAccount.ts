import { Page, expect } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";
import { PageElement } from "../resources/interfaces/iPageElement";
import * as newAccLocators from "../resources/newAccLocators.json";

    function getResource(resourceName: string){
        return newAccLocators.webElements.find((element: PageElement) => element.elementName == resourceName) as PageElement
    };

export class NewAccount {

    constructor(public page: Page){
        pageFixture.page = page;
    };

    newAccLocators = {
        newAccTab:()=> pageFixture.page.locator(getResource('newAccTab').selectorValue),
        newAccHeading:()=> pageFixture.page.locator(getResource('newAccHeading').selectorValue),
        accountTypeDropDown:()=> pageFixture.page.locator(getResource('accountTypeDropDown').selectorValue),
        accountNumberDropDown:()=> pageFixture.page.locator(getResource('accountNumberDropDown').selectorValue),
        accountConfirmation:()=> pageFixture.page.locator(getResource('accountConfirmation').selectorValue),
        openNewAccBtn:()=> pageFixture.page.locator(getResource('openNewAccBtn').selectorValue)
    };

    public async navigateToOpenNewAcc():Promise<void> {
        await this.newAccLocators.newAccTab().click();
        await expect(this.newAccLocators.newAccHeading()).toHaveText('Open New Account');
    };

    public async selectAccountType(selectAccount: string):Promise<void> {
        await this.newAccLocators.accountTypeDropDown().click();
        await this.newAccLocators.accountTypeDropDown().selectOption(selectAccount);
        await this.newAccLocators.accountNumberDropDown().click();
    };

    public async selectAccountNum():Promise<void> {
        await this.newAccLocators.accountNumberDropDown().click();
        let getAccNums = [await this.newAccLocators.accountNumberDropDown().textContent()];
        await this.newAccLocators.accountNumberDropDown().selectOption(getAccNums);
        await this.newAccLocators.openNewAccBtn().click();
    };

    public async isAccOpened():Promise<void> {
        const confirmAcc = this.newAccLocators.accountConfirmation();
        await confirmAcc.textContent();
        await expect(confirmAcc).toContainText(await this.newAccLocators.accountConfirmation().textContent());
        process.stdout.write(`${await confirmAcc.textContent()}`);
    };
};