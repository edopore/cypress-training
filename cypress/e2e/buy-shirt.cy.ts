import {
  MenuContentPage,
  LoginPage,
  AddressStepPage,
  PaymentStepPage,
  ProductsListPage,
  ShippingStepPage,
  ShopingCartPage,
} from "../page/index";

const email = "aperdomobo@gmail.com";
const password = "WorkshopProtractor";

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

    productsListPage.addToCart();
    productsListPage.proceedToCheckout();
    shopingCartPage.proceedToCheckout();

    loginPage.logIn(email, password);

    addressStepPage.proceedToCheckout();

    shippingStepPage.checkAgreement();
    shippingStepPage.proceedToCheckout();

    paymentStepPage.bankWireclick();

    paymentStepPage.clickOncheckout();
    paymentStepPage.verifyFinalOrderMessage("Your order on My Store is complete.");
  });
});
