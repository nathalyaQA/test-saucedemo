///<reference types = "cypress"/>


  describe('Testes de Login', () => {
  
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/');
    });
  
    it('Deve fazer login com usuário válido', () => {
      cy.get('[data-test="username"]').type('standard_user'); // Insere nome de usuário válido no campo de login
      cy.get('[data-test="password"]').type('secret_sauce'); // Insere a senha válida no campo de senha
      cy.get('[data-test="login-button"]').click(); // Seleciona o botão de login e clica nele
      cy.url().should('include', '/inventory.html'); // verifica se a url atual contém 'inventory.html' indicando que o login foi realizado com sucesso
    });
  
    it('Deve exibir erro ao tentar login inválido', () => {
      cy.get('[data-test="username"]').type('usuario_invalido'); // Insere nome de usuário inválido no campo de login'
      cy.get('[data-test="password"]').type('senha_errada'); // Insere senha inválida no campo de senha
      cy.get('[data-test="login-button"]').click(); // Seleciona o botão de login e clica nele
      cy.get('[data-test="error"]').should('be.visible'); // Verifica se a mensagem de erro é exibida
    });
  
  });
  