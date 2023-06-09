Feature: Login

    As a registered user of Parabank,
    I want to be able to log in to my account securely with my username and password,
    so that I can access my account information and perform transactions

    Rule: The user must enter a valid username and password to log in to their account

        Scenario: Login with correct credentials
            Given The user is on the Parabank login page
            When The user enters their correct username and password and clicks the "Login" button
            Then The user is redirected to their account dashboard

        Scenario: Try to login with incorrect credentials
            Given The user is on the Parabank login page
            When The user enters an incorrect username and password and clicks the "Login" button
            Then An error message is displayed saying that the username or password is incorrect

        Scenario: Try to login with blank credential fields
            Given The user is on the Parabank login page
            When The user leaves either the username or password field blank and clicks the "Login" button
            Then An error message is displayed saying that both fields are required

        Scenario: Try to login with invalid characters
            Given The user is on the Parabank login page
            When The user enters their username and password with invalid characters and clicks the "Login" button
            Then An error message is displayed saying that the input is invalid