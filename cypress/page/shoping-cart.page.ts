class ShopingCartPage{

    private goTologin : string;

    constructor(){

        this.goTologin = ".cart_navigation span";
    }
    public proceedToCheckout():void{
        cy.get(this.goTologin).click();
    }
}
export{ShopingCartPage}
