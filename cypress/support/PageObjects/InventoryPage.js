import { inventoryPageElements } from '../elements';

class InventoryPage {
  assertProductListVisible() {
    cy.get(inventoryPageElements.inventoryItem, {timeout: 1000})
    .should('have.length.greaterThan', 0);
  }

  addProductToCart(productName) {
    cy.contains(productName).click();
    cy.get(inventoryPageElements.addToCart).click();
  }

  goToCart() {
    cy.get(inventoryPageElements.cartlink).click();
  }
}

export const inventoryPage = new InventoryPage();
