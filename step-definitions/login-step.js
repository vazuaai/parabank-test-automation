const { Given, When, Then, defineStep } = require('@cucumber/cucumber')
const { LoginPage } = require('../page-objects/login-page')

const loginPage = new LoginPage()

//Givens
Given('The user is on the Parabank login page', async function () {
  await loginPage.navigateToLoginScreen()
})

//Whens
When(
  'The user enters their correct username and password and clicks the "Login" button',
  async function () {
    await loginPage.submitLoginForm('john', 'demo')
  }
)

When(
  'The user enters an incorrect username and password and clicks the "Login" button',
  async function () {
    let randomUser = (Math.random() + 1).toString(36).substring(7)
    let randomPswd = (Math.random() + 1).toString(36).substring(7)
    await loginPage.submitLoginForm(randomUser, randomPswd)
  }
)

//Thens
Then('The user is redirected to their account dashboard', async function () {
  await loginPage.assertUserIsLoggedIn()
})

Then(
  'An error message is displayed saying that the username or password is incorrect',
  async function () {
    await loginPage.assertIncorrectLogin()
  }
)
