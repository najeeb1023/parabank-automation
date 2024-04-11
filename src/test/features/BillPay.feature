@Regression @PayBill
Feature: User is able to transfer funds to an account.

    User is logged in their account and is able to transfer some amount
    to another account.

    Background: User is logged in.
        Given The user lands at the webpage.
        When User registers new user account.
        Then The user is logged in successfully.

    Scenario: User is able to pay bill.
        When The user navigates to bill pay tab.
        And Enters "<Payee Name>", "<Address>", "<City>", "<State>", "<Zip Code>", "<Phone Number>", "<Account Number>", "<Verify Account>", "<Amount>"
        And Selects account number, pressing the send payment.
         
