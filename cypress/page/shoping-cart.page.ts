class ShopingCartPage{
    private buttonContainer : string;
    private goTologin : string;

    constructor(){
        this.buttonContainer = "[style*=' display: block;'] .button-container > a";
        this.goTologin = ".cart_navigation span";
    }

    public clickButtonContainer():void{
        cy.get(this.buttonContainer).click();
    }
    public proceedToCheckout():void{
        cy.get(this.goTologin).click();
    }
}
export{ShopingCartPage}
