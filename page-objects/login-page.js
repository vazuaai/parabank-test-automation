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
    await expect(page.locator('.error')).toContainText(
      'The username and password could not be verified.'
    )
  }

  async assertBlankLoginFields() {
    await expect(page.locator('h1', { hasText: 'Error' })).toBeVisible()
    await expect(page.locator('.error')).toContainText(
      'Please enter a username and password.'
    )
  }

  async assertInvalidCharactersInLoginFields() {
    await expect(page.locator('h1', { hasText: 'Error' })).toBeVisible()
    await expect(page.locator('.error')).toContainText('The input is invalid.')
  }
}

module.exports = { LoginPage }
