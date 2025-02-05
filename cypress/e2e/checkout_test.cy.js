import {loginPage} from '../support/PageObjects/LoginPage';
import {inventoryPage} from '../support/PageObjects/InventoryPage';
import {cartPage} from '../support/PageObjects/CartPage';
import {checkoutPage} from '../support/PageObjects/CheckoutPage';


describe('Testes de Checkout', () => {
  
    beforeEach(() => {
      loginPage.visit();
      loginPage.login('standard_user', 'secret_sauce');
      inventoryPage.addProductToCart('Sauce Labs Backpack');
      inventoryPage.goToCart();
    });
  
      
    it(` Dado que o usuário adicionou um produto ao carrinho
         Quando ele acessa a página do carrinho
         E clica no botão "checkout"
         E preenche as informações de pagamento e envio
         E confirma a compra
         Então ele deve ver uma mensagem de confirmação de pedido
         E a compra deve ser finalizada com sucesso `, () => {
      cartPage.clickCheckout();
      checkoutPage.fillCheckoutForm('João', 'Silva', '12345');
      checkoutPage.submitCheckoutForm();
      checkoutPage.finishPurshase();
      checkoutPage.assertThankYouMessage();
         
    });
  
  });
  