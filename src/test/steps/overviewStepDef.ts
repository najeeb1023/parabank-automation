import { Then, When } from "@cucumber/cucumber";
import { AccountOverview } from "../pages/AccountOverview";
import { pageFixture } from "../hooks/pageFixture";

let accountOverview = new AccountOverview(pageFixture.page);

When('The user navigates to account overview tab.', async function () {
    await accountOverview.navigateToAccountOverview();
});

Then('Test', async function () {
    await accountOverview.navigateToAccountOverview();
});