import { Page, expect } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";
import { PageElement } from "../resources/interfaces/iPageElement";
import * as applyLoanLocators from "../resources/applyLoanLocators.json";

    function getResource(resourceName: string){
        return applyLoanLocators.webElements.find((element: PageElement) => element.elementName == resourceName) as PageElement
    };

export class ApplyLoan {

    constructor(page: Page) {
        pageFixture.page = page;
    };
    
    applyLoanLocators = {
        requestLoanTab:() => pageFixture.page.locator(getResource('requestLoanTab').selectorValue),
        loanAmount:() => pageFixture.page.locator(getResource('loanAmount').selectorValue),
        downPayment:() => pageFixture.page.locator(getResource('downPayment').selectorValue),
        fromAccountBtn:() => pageFixture.page.locator(getResource('fromAccountBtn').selectorValue),
        applyNowBtn:() => pageFixture.page.locator(getResource('applyNowBtn').selectorValue),
        loanRequest:() => pageFixture.page.locator(getResource('loanRequest').selectorValue)
    };

    public async applyForLoan():Promise<void> {
        await this.applyLoanLocators.requestLoanTab().click();
        await this.applyLoanLocators.loanAmount().fill('112');
        await this.applyLoanLocators.downPayment().fill('15');
        let getAccount = [(await this.applyLoanLocators.fromAccountBtn().textContent()).trim()];
        await this.applyLoanLocators.fromAccountBtn().selectOption(getAccount);
        await this.applyLoanLocators.applyNowBtn().click();
    };

    public async loanApproved():Promise<void> {
        const loanApproval = await this.applyLoanLocators.loanRequest();
        process.stdout.write(("    ") + 'Your loan status is: ');
        expect(loanApproval).toContainText('Approved');
        console.log((await this.applyLoanLocators.loanRequest().textContent()).trim());
    };
};