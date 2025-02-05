import {loginPage} from '../support/PageObjects/LoginPage';
import {inventoryPage} from '../support/PageObjects/InventoryPage'


  describe('Testes de Login e Produtos', () => {
  
    beforeEach(() => {
      loginPage.visit();
    });
   
    it(`Dado que eu esteja na página de login
        Quando digitar credenciais válidas
        Então o login deve ser feito com sucesso      
      `, () => {
      loginPage.login('standard_user','secret_sauce'); 
      cy.url().should('include', '/inventory.html'); 
      inventoryPage.assertProductListVisible();
    });
  
    it(`Dado que eu esteja na página de login
        Quando digitar credenciais inválidas
        Então o login não é realizado
        E uma mensagem de erro é exibida      
      `, () => {
      loginPage.login('usuario_invalido', 'senha_errada');
      loginPage.assertErrorMessageVisible();
    });
  
  });
  