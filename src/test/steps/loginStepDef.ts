import { Given, Then, When, setDefaultTimeout } from "@cucumber/cucumber";
import { pageFixture } from "../hooks/pageFixture";
import { LandingPage } from "../pages/LandingPage";

setDefaultTimeout(15000);
let landingPage = new LandingPage(pageFixture.page);

Given('The user lands at the webpage.', async function () {
    await pageFixture.page.goto("https://parabank.parasoft.com/parabank/register.htm");
});

When('User goes to the website and enters {string} and {string}', async function (username: string, password: string) {
    await landingPage.loginUser(username, password);
});

Then('The user is logged in successfully.', async function () {
    console.log('Test successful.')
})