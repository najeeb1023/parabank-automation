import { When } from "@cucumber/cucumber";
import { BillPay } from "../pages/BillPay";
import { pageFixture } from "../hooks/pageFixture";

let billPay = new BillPay(pageFixture.page);

When("The user navigates to bill pay tab.", async function () {
    await billPay.navigateToBillPay();
});

When("Enters {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}", async function (payeeName, payeeAddress, payeeCity, payeeState,payeeZip, payeeNum, payeAcc, payeeConfirmAcc, amountToPay) {
    await billPay.enterPayeeDetails(payeeName, payeeAddress, payeeCity, payeeState, payeeZip, payeeNum, payeAcc, payeeConfirmAcc, amountToPay);
});

When("Selects account number, pressing the send payment.", async function () {
    
});