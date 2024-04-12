@Regression @ApplyForLoan
Feature: User is able to login

    User is able to apply for a loan.

    Background: User is logged in.
        Given The user lands at the webpage.
        When User registers new user account.
        Then The user is logged in successfully.

    Scenario: User is registered and logged in.
        When User navigates to the request loan tab.
        Then User is able to apply for a loan.