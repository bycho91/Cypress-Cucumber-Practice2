import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import FeedbackPage from './feedbackPage'

Given('user opens feedback page', () => {
  FeedbackPage.visit()
})

When(
  'user fills feedback form with {string} {string} {string} {string}',
  (name, email, subject, comment) => {
    FeedbackPage.fillName(name)
    FeedbackPage.fillEmail(email)
    FeedbackPage.fillSubject(subject)
    FeedbackPage.fillComment(comment)
  }
)

When('user clicks submit', () => {
  FeedbackPage.clickSend()
})
