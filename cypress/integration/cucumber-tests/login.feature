Feature: Login to Application

    Login to app with valid credentials
    Login to app with invalid credentials


    Scenario: Valid Login
      Given user is at the login page
      And I want to wait 2000 milliseconds
      And I see "LoginPage Practise" in the title
      And I see "loginpagePractise" in the url
      When user fills username with "rahulshettyacademy"
      And user fills password with "learning"
      And user clicks submit
      Then user should be brought to dashboard

    Scenario: Invalid Login
      Given user is at the login page
      When user fills username with "testing"
      And user fills password with "testing"
      And user clicks submit
      Then user should see error