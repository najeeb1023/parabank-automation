@Login
Feature: User is able to login

    User is able to login.

    Background: Background name
        Given The user lands at the webpage.

    Scenario: 
        When User goes to the website and enters "<USERNAME>" and "<PASSWORD>"
        Then The user is logged in successfully.

        Examples:
            | USERNAME | PASSWORD |
            | automationtest  | password123  |