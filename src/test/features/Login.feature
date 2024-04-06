@Regression @Login
Feature: User is able to login

    User is able to login.

    Background: User is logged in.
        Given The user lands at the webpage.

    Scenario: User is registered and logged in.
        When User registers new user account.
        Then The user is logged in successfully.