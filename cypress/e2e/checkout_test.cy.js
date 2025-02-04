///<reference types = "cypress"/>


describe('Testes de Checkout', () => {
  
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/');
    });
  
      
    it('Deve finalizar a compra com sucesso', () => {
      cy.get('[data-test="username"]').type('standard_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click();
      cy.contains('.inventory_item', 'Sauce Labs Backpack').find('button').click();
      cy.get('.shopping_cart_link').click();
      cy.get('[data-test="checkout"]').click();
      
      //Preenche o formulário com informações do comprador
      cy.get('[data-test="firstName"]').type('João');
      cy.get('[data-test="lastName"]').type('Silva');
      cy.get('[data-test="postalCode"]').type('12345');
      cy.get('[data-test="continue"]').click();
      
      cy.get('[data-test="finish"]').click(); // clica para finalizar a compra
      cy.get('.complete-header').should('contain', 'Thank you for your order!');// Verifica se a página de confirmação exibe a mensagem 'Thank you for your order!'
    });
  
  });
  