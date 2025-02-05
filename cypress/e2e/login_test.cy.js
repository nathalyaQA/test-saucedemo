import {loginPage} from '../support/PageObjects/LoginPage';
import {inventoryPage} from '../support/PageObjects/InventoryPage'


  describe('Testes de Login e Produtos', () => {
  
    beforeEach(() => {
      loginPage.visit();// Navega até a página de login
    });
   
    it(`Dado que eu esteja na página de login
        Quando digitar credenciais válidas
        Então o login deve ser feito com sucesso`, () => {
      loginPage.login('standard_user','secret_sauce'); // Insere credenciais válidas e tenta fazer o login
      cy.url().should('include', '/inventory.html'); // Verifica se foi redirecionado para a página de produtos
      inventoryPage.assertProductListVisible(); // Confirma se a lista de produtos está visível
    });
  
    it(`Dado que eu esteja na página de login
        Quando digitar credenciais inválidas
        Então o login não é realizado
        E uma mensagem de erro é exibida`, () => {
      loginPage.login('usuario_invalido', 'senha_errada');// Insere credenciais inválidas e tenta fazer login
      loginPage.assertErrorMessageVisible();// Verifica se a mensagem de erro é exibida
    });
  
  });
  