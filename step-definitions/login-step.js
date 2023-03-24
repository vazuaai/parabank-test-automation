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

When(
  'The user leaves either the username or password field blank and clicks the "Login" button',
  async function () {
    await loginPage.submitLoginForm('', '')
  }
)

When(
  'The user enters their username and password with invalid characters and clicks the "Login" button',
  async function () {
    await loginPage.submitLoginForm('*ß$>~', 'ˇ^ˇ~÷')
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

Then(
  'An error message is displayed saying that both fields are required',
  async function () {
    await loginPage.assertBlankLoginFields()
  }
)

Then(
  'An error message is displayed saying that the input is invalid',
  async function () {
    await loginPage.assertInvalidCharactersInLoginFields()
  }
)
