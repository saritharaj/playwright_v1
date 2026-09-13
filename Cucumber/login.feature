Feature: Login page

  Scenario: User logs in with valid credentials
    Given I open the login page
    When I enter username "standard_user"
    And I enter password "secret_sauce"
    And I click the login button
    Then I should see the products page