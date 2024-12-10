/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class CreateAccountElements {

    firstnameElement() {
        return cy.get(locator.createAccountPage.firstname, {
            timeout: 30000,
        });
    }
    lastnameElement() {
        return cy.get(locator.createAccountPage.lastname, {
            timeout: 30000,
        });
    }
    emailAddressElement() {
        return cy.get(locator.createAccountPage.emailAddress, {
            timeout: 30000,
        });
    }
    passwordElement() {
        return cy.get(locator.createAccountPage.password, {
            timeout: 30000,
        });
    }
    confirmPasswordElement() {
        return cy.get(locator.createAccountPage.confirmPassword, {
            timeout: 30000,
        });
    }
    createAccountElement() {
        return cy.get(locator.createAccountPage.createAccount, {
            timeout: 30000,
        });
    }
    alertElement() {
        return cy.get(locator.createAccountPage.alert, {
            timeout: 30000,
        });
    }
    firstnameErrorElement() {
        return cy.get(locator.createAccountPage.firstnameError, {
            timeout: 30000,
        });
    }
    lastnameErrorElement() {
        return cy.get(locator.createAccountPage.lastnameError, {
            timeout: 30000,
        });
    }
    emailErrorElement() {
        return cy.get(locator.createAccountPage.emailError, {
            timeout: 30000,
        });
    }
    passConfirmErrorElement() {
        return cy.get(locator.createAccountPage.passConfirmError, {
            timeout: 30000,
        });
    }
    passwordErrorElement() {
        return cy.get(locator.createAccountPage.passwordError, {
            timeout: 30000,
        });
    }
    passwordStrengthElement() {
        return cy.get(locator.createAccountPage.passwordStrength, {
            timeout: 30000,
        });
    }
}