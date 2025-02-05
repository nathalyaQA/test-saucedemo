import {loginPage} from '../support/PageObjects/LoginPage';
import {inventoryPage} from '../support/PageObjects/InventoryPage';
import { cartPage } from '../support/PageObjects/CartPage';

const produto = 'Sauce Labs Backpack'

describe('Testes de Produtos', () => {
  
    beforeEach(() => {
      loginPage.visit();
      loginPage.login('standard_user','secret_sauce');
      
    });
  
          
    it( `Dado que o usuário acessa a página de login
         Quando ele insere credenciais válidas
         E clica no botão de login
         Então ele deve ser redirecionado para página de produtos
         E a lista de produtos deve ser exibida`, () => {
      inventoryPage.assertProductListVisible();

    });
  
    it(` Dado que o usuário está na página de produtos
         Quando ele clicar em "add cart" de um produto
         Então o produto deve aparecer na página do carrinho`, () => {
      inventoryPage.addProductToCart(produto);
      inventoryPage.goToCart();
      cy.contains(produto)
      .should('be.visible');
    });
  
    it(`Dado que o usuário adicionou um produto ao carrinho
        Quando ele acessa a página do carrinho
        E clica no botão "Remover" do produto
        Então o produto não deve mais estar no carrinho`, () => {
      inventoryPage.addProductToCart(produto);
      inventoryPage.goToCart();
      cartPage.removeProductFromCart(produto);   
      cartPage.assertProductNotInCart(produto);   
    });
   
});
  