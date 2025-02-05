import {loginPage} from '../support/PageObjects/LoginPage';
import {inventoryPage} from '../support/PageObjects/InventoryPage'


  describe('Testes de Login e Produtos', () => {
  
    beforeEach(() => {
      loginPage.visit();
    });
  
    it('Deve fazer login com usuário válido', () => {
      loginPage.login('standard_user','secret_sauce'); 
      cy.url().should('include', '/inventory.html'); 
      inventoryPage.assertProductListVisible();
    });
  
    it('Deve exibir erro ao tentar login inválido', () => {
      loginPage.login('usuario_invalido', 'senha_errada');
      loginPage.assertErrorMessageVisible();
    });
  
  });
  