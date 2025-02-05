import { loginPageElements } from "../elements";

class LoginPage {
    visit() {
        cy.visit('https://www.saucedemo.com/');
    }

    typeUserName(username) {
        cy.get(loginPageElements.usernameField).type(username);
    }

    typePassword(password) {
        cy.get(loginPageElements.passwordField).type(password);
    }

    clickLoginButton() {
        cy.get(loginPageElements.loginButton).click();
    }

    assertErrorMessageVisible() {
        cy.get(loginPageElements.errormessage).should('be.visible');
    }

    login(username, password) {
        this.typeUserName(username);
        this.typePassword(password);
        this.clickLoginButton();
    }

}

export const loginPage = new LoginPage();