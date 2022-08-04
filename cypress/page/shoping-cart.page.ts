class ShopingCartPage{

    private proceedToCheckoutButton : string;

    constructor(){

        this.proceedToCheckoutButton = ".cart_navigation [title = 'Proceed to checkout']";
    }
    public proceedToCheckout():void{
        cy.get(this.proceedToCheckoutButton).click();
    }
}
export{ShopingCartPage}
