import {loginPage} from '../support/PageObjects/LoginPage';
import {inventoryPage} from '../support/PageObjects/InventoryPage';
import { cartPage } from '../support/PageObjects/CartPage';

const produto = 'Sauce Labs Backpack'

describe('Testes de Produtos', () => {
  
    beforeEach(() => {
      loginPage.visit();
      loginPage.login('standard_user','secret_sauce');
      
    });
  
          
    it('Deve visualizar a lista de produtos', () => {
      inventoryPage.assertProductListVisible();

    });
  
    it('Deve adicionar um produto ao carrinho', () => {
      inventoryPage.addProductToCart(produto);
      inventoryPage.goToCart();
      cy.contains(produto)
      .should('be.visible');
    });
  
    it.only('Deve remover um produto do carrinho', () => {
      inventoryPage.addProductToCart(produto);
      inventoryPage.goToCart();
      cartPage.removeProductFromCart(produto);   
      cartPage.assertProductNotInCart(produto);   
    });
   
});
  