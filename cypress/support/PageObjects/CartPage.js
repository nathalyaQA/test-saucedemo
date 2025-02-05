import { cartPageElements } from '../elements';

class CartPage {
  removeProductFromCart(productName) {
    cy.contains(productName).should('be.visible');
    cy.get(cartPageElements.cartItemRemoveButton).click();
  }
    
  assertProductNotInCart(productName) {
    cy.contains(productName).should('not.exist');
  }

  clickCheckout() {
    cy.get(cartPageElements.checkout).click();
  }

}

export const cartPage = new CartPage();
