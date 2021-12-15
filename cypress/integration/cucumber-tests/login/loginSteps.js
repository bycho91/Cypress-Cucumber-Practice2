import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './loginPage'

Given('user is at the login page', () => {
  LoginPage.visitLoginPage()
})

When('user enters valid credentials', () => {
  cy.fixture('login').then((user) => {
    const username = user.valid.username
    const password = user.valid.password

    LoginPage.fillUsername(username)
    LoginPage.fillPassword(password)
  })
  LoginPage.selectBox('Teacher')
  LoginPage.checkAgree()
})

When('user enters invalid credentials', () => {
  cy.fixture('login').then((user) => {
    const username = user.invalid.username
    const password = user.invalid.password

    LoginPage.fillUsername(username)
    LoginPage.fillPassword(password)
  })
  LoginPage.selectBox('Teacher')
  LoginPage.checkAgree()
})

When('user fills username with {string}', (username) => {
  LoginPage.fillUsername(username)
})

When('user fills password with {string}', (password) => {
  LoginPage.fillPassword(password)
})

When('user clicks submit', () => {
  LoginPage.submitLogin()
})

Then('user should be brought to dashboard', () => {
  cy.url().should('include', 'angularpractice/shop')
})

Then('user should see error', () => {
  LoginPage.checkForError()
})
