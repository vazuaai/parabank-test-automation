const { Given, When, Then, defineStep } = require('@cucumber/cucumber')
const { LoginPage } = require('../page-objects/login-page')

const loginPage = new LoginPage()

Given('The user is on the Parabank login page', async function () {
  await loginPage.navigateToLoginScreen()
})

When(
  'The user enters their correct username and password and clicks the "Login" button',
  async function () {
    await loginPage.submitLoginForm()
  }
)

Then('The user is redirected to their account dashboard', async function () {
  await loginPage.assertUserIsLoggedIn()
})
