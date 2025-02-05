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
  
      
    it('Deve finalizar a compra com sucesso', () => {
      cartPage.clickCheckout();
      checkoutPage.fillCheckoutForm('João', 'Silva', '12345');
      checkoutPage.submitCheckoutForm();
      checkoutPage.finishPurshase();
      checkoutPage.assertThankYouMessage();
         
    });
  
  });
  