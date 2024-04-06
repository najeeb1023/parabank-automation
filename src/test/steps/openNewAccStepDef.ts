import { Then, When } from "@cucumber/cucumber";
import { NewAccount } from "../pages/OpenNewAccount";
import { pageFixture } from "../hooks/pageFixture";

let newAccount = new NewAccount(pageFixture.page);

When('The user navigates to open new account tab.', async function () {
    await newAccount.navigateToOpenNewAcc();
});

Then('User is able to create new checking account.', async function () {
    console.log('Test.')
});