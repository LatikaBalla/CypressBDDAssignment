Feature: Create Account Flow
  As a new user,
  I want to create an account
  So that I can access the application.

  Background: Account Creation
    Given I am on the Create Account page

  Scenario: Successful Account Creation
    When I enter valid Firstname, Lastname
    And I enter Email, Password and Confirm Password
    And I click the Create Account button
    Then I should see a confirmation message saying Account created successfully
    And I should be redirected to the My Account page

  Scenario: Account Creation with Existing Email
    When I enter valid Firstname, Lastname
    And I enter already created Email,Password and Confirm Password
    And I click the Create Account button
    Then I should see an error message saying Email already exists

  Scenario: Account Creation with Invalid Email
    When I enter valid Firstname, Lastname
    And I enter Invalid Email,Password and Confirm Password
    And I click the Create Account button
    Then I should see an error message saying Please enter a valid email address

  Scenario: Account Creation with Weak Password
    When I enter valid Firstname, Lastname
    And I enter Email, weak Password and Confirm Password
    And I click the Create Account button
    Then I should see an error message saying Password Strength Weak

  Scenario: Account Creation with short Length Password
    When I enter valid Firstname, Lastname
    And I enter Email, short Password and Confirm Password
    And I click the Create Account button
    Then I should see an error message saying Password must be at least 8 characters long

  Scenario: Account Creation with Mismatch Password and Confirm Password
    When I enter valid Firstname, Lastname
    And I enter Email, Password and Confirm Password different
    And I click the Create Account button
    Then I should see an error message saying Please enter the same value

  Scenario: Account Creation with Empty Fields Validation
    And I click the Create Account button
    Then I should see an error message saying all madatory fields should have validation message

  Scenario: Account Creation with Special Characters in Name
    When I enter Special charactor at Firstname and Lastname
    And I enter Email, Password and Confirm Password
    And I click the Create Account button
    Then I should see an error message saying Name is not valid

  Scenario: Account Creation with Page Refresh
    When I enter valid Firstname, Lastname
    And I enter Email, Password and Confirm Password
    And Click on the Refresh button
    Then Verify the All fields data should be cleared

  Scenario: Account Creation with Browser Back Button Behavior
    When I enter valid Firstname, Lastname
    And I enter Email, Password and Confirm Password
    And Click on the Back button
    Then Verify the All fields data should be cleared