///<reference types = "cypress"/>


describe('Testes de Produtos', () => {
  
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/');
    });
  
          
    it('Deve visualizar a lista de produtos', () => {
      cy.get('[data-test="username"]').type('standard_user'); // Insere o nome de usuário válido no campo de login
      cy.get('[data-test="password"]').type('secret_sauce'); // Insere uma senha válida no campo de senha
      cy.get('[data-test="login-button"]').click(); // clica no botão de login para entrar na area de produtos
      cy.get('.inventory_item').should('have.length.greaterThan', 0); // Seleciona todos os elementos que possuem classe .inventory_item e verifica se o numero de elementos encontrados é maior que 0
    });
  
    it('Deve adicionar um produto ao carrinho', () => {
      cy.get('[data-test="username"]').type('standard_user'); // Insere nome de usuário válido no campo de login
      cy.get('[data-test="password"]').type('secret_sauce'); // Insere ums senha válida no campo de senha
      cy.get('[data-test="login-button"]').click();
      cy.contains('.inventory_item', 'Sauce Labs Backpack').find('button').click();// procura um elemento da lista de produtos que contenha o nome 'Sauce Labs Backpack' encontra o botao de adicionar carrinho e clica nele
      cy.get('.shopping_cart_link').click(); // Clica no ícone do carrinho para visualizar os produtos adicionados
      cy.contains('.cart_item', 'Sauce Labs Backpack').should('be.visible'); // Garante que o produto está visível no carrinho confirmando que foi adicionado corretamente
      cy.contains('.cart_item','Sauce Labs Backpack').should('contain', '$29.99'); // Verifica o preço do produto adicionado
    });
  
    it('Deve remover um produto do carrinho', () => {
      cy.get('[data-test="username"]').type('standard_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click();
      cy.contains('.inventory_item', 'Sauce Labs Backpack').find('button').click();// procura um elemento da lista de produtos que contenha o nome 'Sauce Labs Backpack' encontra o botao de adicionar carrinho e clica nele
      cy.get('.shopping_cart_link').click(); // clica no icone carrinho de compras para visualizar os itens adicionados
      cy.contains('.cart_item', 'Sauce Labs Backpack').find('.cart_button').click();// dentro do carrinho encontra o produto adicionado e clica no botão de remover
      cy.contains('.cart_item', 'Sauce Labs Backpack').should('not.exist'); // verifica se o item não existe mais no carrinho
    });
   
});
  