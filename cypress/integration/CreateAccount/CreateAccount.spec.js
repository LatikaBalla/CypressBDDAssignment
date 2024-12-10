import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { CreateAccountActions } from '../PageObject/PageActions/CreateAccountActions'

const cracc = new CreateAccountActions()

Given('I am on the Create Account page', () => {
    cracc.visitCreateAccountpage()
})
When('I enter valid Firstname, Lastname', () => {
    cracc.enterFirstName()
    cracc.enterLastName()
})
And('I enter Email, Password and Confirm Password', () => {
    cracc.enterEmail()
    cracc.enterPassword()
    cracc.enterConfirmPassword()
})
And('I click the Create Account button', () => {
    cracc.clickOnCreateAccountButton()
})
Then('I should see a confirmation message saying Account created successfully', () => {
    cracc.verifyCreatedSuccessfully()
})
And('I should be redirected to the My Account page', () => {
    cy.url().should('include', '/account/');
})
And('I enter already created Email,Password and Confirm Password', () => {
    cracc.enterExitingEmail()
    cracc.enterPassword()
    cracc.enterConfirmPassword()
})
Then('I should see an error message saying Email already exists', () => {
    cracc.verifyAlreadyEmailErrorMessage()
})
And('I enter Invalid Email,Password and Confirm Password', () => {
    cracc.enterInvalidEmail()
    cracc.enterPassword()
    cracc.enterConfirmPassword()
})
Then('I should see an error message saying Please enter a valid email address', () => {
    cracc.verifyEmailErrorMessage()
})
And('I enter Email, weak Password and Confirm Password', () => {
    cracc.enterEmail()
    cracc.enterWeakPassword()
    cracc.enterConfirmPassword()
})
Then('I should see an error message saying Password Strength Weak', () => {
    cracc.verifyWeakPasswordError()
})
And('I enter Email, short Password and Confirm Password', () => {
    cracc.enterEmail()
    cracc.enterShortPassword()
    cracc.enterShortConfirmPassword()
})
Then('I should see an error message saying Password must be at least 8 characters long', () => {
    cracc.verifyPasswordLengthError()
})
And('I enter Email, Password and Confirm Password different', () => {
    cracc.enterEmail()
    cracc.enterPassword()
    cracc.enterConfirmPassworddiff()
})
Then('I should see an error message saying Please enter the same value', () => {
    cracc.verifyPasswordErrorMessage()
})
Then('I should see an error message saying all madatory fields should have validation message', () => {
    cracc.verifyMandatoryFieldsValidation()
})
When ('I enter Special charactor at Firstname and Lastname',()=>{
    cracc.enterInvalidFirstName()
    cracc.enterInvalidLastName()
})
Then ('I should see an error message saying Name is not valid',()=>{
    cracc.verifyNameInvalidMessage()
})
And ('Click on the Refresh button',()=>{
cracc.clickOnRefreshButton()
})
Then ('Verify the All fields data should be cleared',()=>{
    cracc.verifyallFieldsCleared()
})
And ('Click on the Back button',()=>{
    cracc.clickOnBackButton()
})

