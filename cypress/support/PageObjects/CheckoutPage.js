import { checkoutPageElements } from "../elements";

class CheckoutPage {
  fillCheckoutForm (firstName, lastName, postalCode){
    cy.get(checkoutPageElements.firstNameField).type(firstName);
    cy.get(checkoutPageElements.lastNameField).type(lastName);
    cy.get(checkoutPageElements.postalCodeField).type(postalCode);
  }

  submitCheckoutForm() {
    cy.get(checkoutPageElements.continueButton).click();
  }

  finishPurshase() {
    cy.get(checkoutPageElements.finishButton).click();
  }

  assertThankYouMessage() {
    cy.get(checkoutPageElements.completeHeader)
    .should('contain', 'Thank you for your order!');
  }

}

export const checkoutPage = new CheckoutPage();