Feature: Time tracking test
  Scenario: Login with email
    Given Login with default credentials
  Scenario: Add new tag
    Then User can add new tag
  Scenario: Add employee
    And User can add new employee
  Scenario: Add new client
    And User can add new client
  Scenario: Add time
    And User can visit Employees timesheets daily page
    And User can see add time log button
    When User click on add time log button
    Then User can see project dropdown
    When User click on project dropdown
    Then User can select project from dropdown options
    And User can see task dropdown
    When User click on task dropdown
    Then User can select task from dropdown options
    And User can see client dropdown
    When User click on client dropdown
    Then User can select client from dropdown options
    And User can see start time dropdown
    When User click on start time dropdown
    Then User can select time from dropdown options
    Then User can see date input field
    And User can enter date
    And User can see employee dropdown
    When User click on employee dropdown
    Then User can select employee from dropdown options
    And User can see time log description input field
    And User can enter time log description
    And User can see save time log button
    When User click on save time log button
    Then Notification message will appear
  Scenario: Visit Time tracking page to verify time was added
    And User can visit Time tracking page
    And User can verify text content