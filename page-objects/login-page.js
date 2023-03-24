class LoginPage {
  async navigateToLoginScreen() {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm')
  }

  async submitLoginForm() {
    await page.fill("input[name='username']", 'john')
    await page.fill("input[name='password']", 'demo')
    await page.click("input[value='Log In']")
  }

  async assertUserIsLoggedIn() {
    await page.waitForSelector('h1.title')
  }
}

module.exports = { LoginPage }
