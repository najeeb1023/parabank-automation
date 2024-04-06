import { Then, When } from "@cucumber/cucumber";
import { AccountOverview } from "../pages/AccountOverview";
import { pageFixture } from "../hooks/pageFixture";

let accountOverview = new AccountOverview(pageFixture.page);

When('The user navigates to account overview tab.', async function () {
    await accountOverview.navigateToAccountOverview();
});

Then('User is able to see account number, balance, available amount and total balance.', async function () {
    await accountOverview.navigateToAccountOverview();
    await accountOverview.getAccountNumber();
});