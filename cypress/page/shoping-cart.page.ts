class ShopingCartPage{
    private addToCart: string;
    private buttonContainer : string;
    private goTologin : string;

    constructor(){
        this.addToCart = "#center_column a.button.ajax_add_to_cart_button.btn.btn-default";
        this.buttonContainer = "[style*=' display: block;'] .button-container > a";
        this.goTologin = ".cart_navigation span";
    }
    public addShoppingCart():void{
        cy.get(this.addToCart).click();
    }
    public clickButtonContainer():void{
        cy.get(this.buttonContainer).click();
    }
    public toLogin():void{
        cy.get(this.goTologin).click();
    }
}
export{ShopingCartPage}
