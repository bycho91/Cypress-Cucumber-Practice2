const URL = 'http://zero.webappsecurity.com/feedback.html'
const NAME = '#name'
const EMAIL = '#email'
const SUBJECT = '#subject'
const COMMENT = '#comment'
const SENDBTN = 'input[value="Send Message"]'
const CLEARBTN = 'input[value="Clear"]'

class FeedbackPage {
  static visit() {
    cy.visit(URL)
  }

  static fillName(name) {
    cy.get(NAME).type(name)
  }

  static fillEmail(email) {
    cy.get(EMAIL).type(email)
  }

  static fillSubject(subject) {
    cy.get(SUBJECT).type(subject)
  }

  static fillComment(comment) {
    cy.get(COMMENT).type(comment)
  }

  static clickSend() {
    cy.get(SENDBTN).click()
  }

  static clearForm() {
    cy.get(CLEARBTN).click()
  }
}

export default FeedbackPage
