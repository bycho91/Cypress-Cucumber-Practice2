const URL = 'https://rahulshettyacademy.com/loginpagePractise/#'
const USERNAME = '#username'
const PASSWORD = '#password'
const SELECTBOX = 'select[class="form-control"]'
const AGREE = '#terms'
const SIGNINBTN = '#signInBtn'
const ERROR = '.alert-danger'

class LoginPage {
  static visitLoginPage() {
    cy.visit(URL)
  }

  static fillUsername(name) {
    cy.get(USERNAME).type(name)
  }

  static fillPassword(password) {
    cy.get(PASSWORD).type(password)
  }

  static selectBox(person) {
    cy.get(SELECTBOX).select(person)
  }

  static checkAgree() {
    cy.get(AGREE).click()
  }

  static submitLogin() {
    cy.get(SIGNINBTN).click()
  }

  static checkForError() {
    cy.get(ERROR).should('be.visible')
  }
}

export default LoginPage
