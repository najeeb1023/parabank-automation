import { Given, Then, When } from "@cucumber/cucumber";
import { pageFixture } from "../hooks/pageFixture";
import { LandingPage } from "../pages/landingPage";

let landingPage = new LandingPage(pageFixture.page);

Given("The user lands at the webpage.", async () => {
    await pageFixture.page.goto("https://parabank.parasoft.com/parabank/register.htm");
});

When("User goes to the website and enters {string} and {string}", async (username: string, password: string) => {
    await landingPage.loginUser(username, password);
});

Then("The user is logged in successfully.", async () => {
    console.log('Test successful.')
})