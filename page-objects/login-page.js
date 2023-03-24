const { expect } = require('@playwright/test')

class LoginPage {
  async navigateToLoginScreen() {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm')
  }

  async submitLoginForm(username, password) {
    await page.fill("input[name='username']", username)
    await page.fill("input[name='password']", password)
    await page.click("input[value='Log In']")
  }

  async assertUserIsLoggedIn() {
    await expect(
      page.locator('h1', { hasText: 'Accounts Overview' })
    ).toBeVisible()
  }

  async assertIncorrectLogin() {
    await expect(page.locator('h1', { hasText: 'Error' })).toBeVisible()
  }
}

module.exports = { LoginPage }
