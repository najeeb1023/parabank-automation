@openacc @Regression
Feature: User is able to view their account details.

    User logs in their account. And navigates to account overview
    to view their account details.

    Background: User is logged in.
        Given The user lands at the webpage.
        When User registers new user account.
        Then The user is logged in successfully.
    
    Scenario: User is able to create a new checking account.  
        When The user navigates to open new account tab.
        Then User is able to create new checking account.