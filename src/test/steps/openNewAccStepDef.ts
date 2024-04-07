import { Then, When } from "@cucumber/cucumber";
import { NewAccount } from "../pages/OpenNewAccount";
import { pageFixture } from "../hooks/pageFixture";

let newAccount = new NewAccount(pageFixture.page);

When('The user navigates to open new account tab.', async function () {
    await newAccount.navigateToOpenNewAcc();
});

When('User is able to create new {string}.', async function (selectAccount: string) {
    await newAccount.selectAccountType(selectAccount);
});

When('User selects the account number.', async function () {
    await newAccount.selectAccountNum();
});

Then('User account is opened.', async function () {
    await newAccount.isAccOpened();
});