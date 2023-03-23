const { Given, When, Then, defineStep } = require('@cucumber/cucumber')

Given('The user is on the Parabank login page', async function () {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm')
})

When(
  'The user enters their correct username and password and clicks the "Login" button',
  async function () {
    await page.fill('#user-name', 'standard_user')
    await page.fill('#password', 'secret_sauce')
    await page.click('#login-button')
  }
)

Then('I should see the home page', async function () {
  await page.waitForSelector('.inventory_list')
})
