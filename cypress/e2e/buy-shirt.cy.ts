import { MenuContentPage } from "../page/index";
import { LoginPage } from "../page/index";
import { AddressStepPage } from "../page/index";
import { PaymentStepPage } from "../page/index";
import { ProductsListPage } from "../page/index";
import { ShippingStepPage } from "../page/index";
import { ShopingCartPage } from "../page/index";

const menuContentPage = new MenuContentPage();
const loginPage = new LoginPage();
const addressStepPage = new AddressStepPage();
const paymentStepPage = new PaymentStepPage();
const productsListPage = new ProductsListPage();
const shippingStepPage = new ShippingStepPage();
const shopingCartPage = new ShopingCartPage();

describe("Buy a t-shirt", () => {
  it("then should be bought a t-shirt", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();

    shopingCartPage.addShoppingCart();
    shopingCartPage.clickButtonContainer();
    shopingCartPage.toLogin();

    loginPage.putEmailUser();
    loginPage.putPasswordUser();
    loginPage.goToAddressCheckout();

    addressStepPage.addressCheckout();

    shippingStepPage.checkAgreement();
    shippingStepPage.goToCarrier();

    paymentStepPage.bankWireclick();

    productsListPage.clickOncheckout();    
    productsListPage.checkOrderFinal();

  });
});
