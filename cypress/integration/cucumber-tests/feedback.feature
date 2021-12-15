Feature: Send Feedback

    As a customer
    I can send my feedback via form

  Scenario: Submit Feedback Form
    Given user opens feedback page
    When user fills feedback form with "Benjamin" "bycho@gmail.com" "Cool" "Cool beans"
    And user clicks submit
    Then I see "sendFeedback.html" in the url
    Then I see success comment