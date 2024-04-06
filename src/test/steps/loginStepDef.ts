import { Given, Then, When, setDefaultTimeout } from "@cucumber/cucumber";
import { pageFixture } from "../hooks/pageFixture";
import { LandingPage } from "../pages/LandingPage";

setDefaultTimeout(15000);
let landingPage = new LandingPage(pageFixture.page);

Given('The user lands at the webpage.', async function () {
    await pageFixture.page.goto("https://parabank.parasoft.com/parabank/register.htm");
});

When('User registers new user account.', async function () {
    await landingPage.registerUser();
});

Then('The user is logged in successfully.', async function () {
    await landingPage.isUserLoggedIn();
});