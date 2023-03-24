const { Given, When, Then, defineStep } = require('@cucumber/cucumber')

Given('The user is on the Parabank login page', async function () {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm')
})

When(
  'The user enters their correct username and password and clicks the "Login" button',
  async function () {
    await page.locator("input[name='username']").type('john')
    await page.locator("input[name='username']").type('demo')
    await page.locator("input[value='Log In']").click()
  }
)

Then('The user is redirected to their account dashboard', async function () {
  await page.waitForSelector('h1.title')
})
