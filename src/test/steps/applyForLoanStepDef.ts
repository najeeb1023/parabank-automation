import { Then, When } from "@cucumber/cucumber";
import { ApplyLoan } from "../pages/ApplyLoan";
import { pageFixture } from "../hooks/pageFixture";

let applyLoan = new ApplyLoan(pageFixture.page);

When('User navigates to the request loan tab.', async function () {
    await applyLoan.applyForLoan();
});

Then('User is able to apply for a loan.', async function () {
    await applyLoan.loanApproved();
    console.log("\n");
});