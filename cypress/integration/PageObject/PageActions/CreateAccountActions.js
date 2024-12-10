/// <reference types="cypress" />
const CreateAccountElements = require("../PageElements/CreateAccountElements.js")
const tdata = require("../../../testData.json");

export class CreateAccountActions {
    constructor() {
        globalThis.acc = new CreateAccountElements();
    }
    visitCreateAccountpage() {
        cy.visit('/customer/account/create/')
    }
    enterFirstName() {
        acc.firstnameElement().type(tdata.createAccountPage.firstname)
    }
    enterLastName() {
        acc.lastnameElement().type(tdata.createAccountPage.lastname)
    }
    enterEmail() {
        const uniqueSeed = Date.now();
        acc.emailAddressElement().type(uniqueSeed + tdata.createAccountPage.emailAddress)
    }
    enterPassword() {
        acc.passwordElement().type(tdata.createAccountPage.password)
    }
    enterConfirmPassword() {
        acc.confirmPasswordElement().type(tdata.createAccountPage.password)
    }
    clickOnCreateAccountButton() {
        acc.createAccountElement().contains('Create an Account').click()
    }
    verifyCreatedSuccessfully() {
        acc.alertElement().should('contain', tdata.createAccountPage.registrationMessage)
    }
    enterExitingEmail() {
        acc.emailAddressElement().type(tdata.createAccountPage.existingemail)
    }
    verifyAlreadyEmailErrorMessage() {
        acc.alertElement().should('contain', tdata.createAccountPage.emailAlreadyError)
    }
    verifyEmailErrorMessage() {
        acc.emailErrorElement().should('contain', tdata.createAccountPage.emailError)
    }
    enterInvalidEmail() {
        acc.emailAddressElement().type(tdata.createAccountPage.invalidemail)
    }
    enterShortPassword() {
        acc.passwordElement().type(tdata.createAccountPage.shortPassword)
    }
    enterShortConfirmPassword(){
        acc.confirmPasswordElement().type(tdata.createAccountPage.shortPassword)
    }
    verifyPasswordLengthError() {
        acc.passwordErrorElement().should('contain', tdata.createAccountPage.lengthPasswordError)
    }
    enterWeakPassword() {
        acc.passwordElement().type(tdata.createAccountPage.weakPassword)
    }
    verifyWeakPasswordError() {
        acc.passwordStrengthElement().should('contain', tdata.createAccountPage.weakPasswordError)
    }
    enterConfirmPassworddiff() {
        acc.confirmPasswordElement().type(tdata.createAccountPage.passwordDiff)
    }
    verifyPasswordErrorMessage() {
        acc.passConfirmErrorElement().should('contain', tdata.createAccountPage.passwordDiffError)
    }
    verifyMandatoryFieldsValidation() {
        acc.firstnameErrorElement().should('contain', tdata.createAccountPage.validationMessage)
        acc.lastnameErrorElement().should('contain', tdata.createAccountPage.validationMessage)
        acc.emailErrorElement().should('contain', tdata.createAccountPage.validationMessage)
        acc.passwordErrorElement().should('contain', tdata.createAccountPage.validationMessage)
        acc.passConfirmErrorElement().should('contain', tdata.createAccountPage.validationMessage)
    }
    enterInvalidFirstName(){
        acc.firstnameElement().type(tdata.createAccountPage.invalidFirstname)
    }
    enterInvalidLastName(){
        acc.lastnameElement().type(tdata.createAccountPage.invalidLastname)
    }
    verifyNameInvalidMessage(){
        acc.alertElement().should('include.text', tdata.createAccountPage.invalidNameMessage)
    }
    clickOnRefreshButton(){
        cy.reload();
    }
    clickOnBackButton(){
        cy.go('back');
        cy.go('forward');
    }
    verifyallFieldsCleared(){
        acc.firstnameElement().should('have.value', '');
        acc.lastnameElement().should('have.value', '');
        acc.emailAddressElement().should('have.value', '');
        acc.passwordElement().should('have.value', '');
        acc.confirmPasswordElement().should('have.value', '');    
    }
}
export default CreateAccountActions 