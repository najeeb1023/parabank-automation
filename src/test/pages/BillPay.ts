import { Page, expect } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";
import { PageElement } from "../resources/interfaces/iPageElement";
import * as billPayLocators from "../resources/billPayLocators.json";

    function getResource(resourceName: string){
        return billPayLocators.webElements.find((element: PageElement) => element.elementName == resourceName) as PageElement
    };

export class BillPay {

    constructor(public page: Page){
        pageFixture.page = page;
    };

    billPaylocators = {
        billPayTab:() => pageFixture.page.locator(getResource('billPayTab').selectorValue),
        payeeName:() => pageFixture.page.locator(getResource('payeeName').selectorValue),
        payeeAddress:() => pageFixture.page.locator(getResource('payeeAddress').selectorValue),
        payeeCity:() => pageFixture.page.locator(getResource('payeeCity').selectorValue),
        payeeState:() => pageFixture.page.locator(getResource('payeeState').selectorValue),
        payeeZip:() => pageFixture.page.locator(getResource('payeeZip').selectorValue),
        payeeNum:() => pageFixture.page.locator(getResource('payeeNum').selectorValue),
        payeeAcc:() => pageFixture.page.locator(getResource('payeeAcc').selectorValue),
        payeeConfirmAcc:() => pageFixture.page.locator(getResource('payeeConfirmAcc').selectorValue),
        amountToPay:() => pageFixture.page.locator(getResource('amountToPay').selectorValue),
        fromAccountDropDown:() => pageFixture.page.locator(getResource('fromAccountDropDown').selectorValue),
        sendPaymentBtn:() => pageFixture.page.locator(getResource('sendPaymentBtn').selectorValue),
        billPaymentConfirmation:() => pageFixture.page.locator(getResource('billPaymentConfirmation').selectorValue)
    }

    public async navigateToBillPay ():Promise<void> {
        await this.billPaylocators.billPayTab().click();
    };

    public async enterPayeeDetails (payeeName, payeeAddress, payeeCity, payeeState, payeeZip, payeeNum, payeAcc, payeeConfirmAcc, amountToPay):Promise<void> {
        await this.billPaylocators.payeeName().fill(payeeName);
        await this.billPaylocators.payeeAddress().fill(payeeAddress);
        await this.billPaylocators.payeeCity().fill(payeeCity);
        await this.billPaylocators.payeeState().fill(payeeState);
        await this.billPaylocators.payeeZip().fill(payeeZip);
        await this.billPaylocators.payeeNum().fill(payeeNum);
        await this.billPaylocators.payeeAcc().fill(payeAcc);
        await this.billPaylocators.payeeConfirmAcc().fill(payeeConfirmAcc);
        await this.billPaylocators.amountToPay().fill(amountToPay);
        let accountNum = [(await this.billPaylocators.fromAccountDropDown().textContent()).trim()];
        await this.billPaylocators.fromAccountDropDown().selectOption(accountNum);
        await this.billPaylocators.sendPaymentBtn().click();
    };

    public async assertSentPayment ():Promise<void> {
        let confirmPayment = await this.billPaylocators.billPaymentConfirmation().textContent();
        expect(confirmPayment).toContain('was successful');
        process.stdout.write("\n" + ("    ") +confirmPayment.trim() + "\n" + "\n");
    }

};
