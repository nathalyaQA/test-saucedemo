import {loginPage} from '../support/PageObjects/LoginPage';
import {inventoryPage} from '../support/PageObjects/InventoryPage';
import {cartPage} from '../support/PageObjects/CartPage';
import {checkoutPage} from '../support/PageObjects/CheckoutPage';


describe('Testes de Checkout', () => {
  
    beforeEach(() => {
      loginPage.visit();// Acessa a página de login
      loginPage.login('standard_user', 'secret_sauce'); // Realiza login com credenciais válidas
      inventoryPage.addProductToCart('Sauce Labs Backpack'); // adiciona o produto 'Sauce Labs Backpack ao carrinho'
      inventoryPage.goToCart();// Navega até a página do carrinho
    });
  
      
    it(` Dado que o usuário adicionou um produto ao carrinho
         Quando ele acessa a página do carrinho
         E clica no botão "checkout"
         E preenche as informações de pagamento e envio
         E confirma a compra
         Então ele deve ver uma mensagem de confirmação de pedido
         E a compra deve ser finalizada com sucesso `, () => {
      cartPage.clickCheckout(); // Clica no botão checkout para iniciar o processo de compra
      checkoutPage.fillCheckoutForm('João', 'Silva', '12345'); // Preenche o formulário de checkout com nome, sobrenome e cep
      checkoutPage.submitCheckoutForm();// Envia o formulário de checkout
      checkoutPage.finishPurshase();// Finaliza a compra
      checkoutPage.assertThankYouMessage(); // verifica se a mensagem de confirmação da compra está visível
         
    });
  
  });
  