const common = `
    --require setup/hooks.js
    --require step-definitions/**/*.step.js
    --format '@serenity-js/cucumber'
`
module.exports = {
  default: `${common} features/**/*.feature`,
  timeout: 30000,
}
