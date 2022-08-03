class ProductsListPage{
    private addToCartSelector: string;
    private buttonContainer : string;

    constructor(){
        this.addToCartSelector = "#center_column a.button.ajax_add_to_cart_button.btn.btn-default";
        this.buttonContainer = "[style*=' display: block;'] .button-container > a";

    }
    public proceedToCheckout():void{
        cy.get(this.buttonContainer).click();
    }
    public addToCart():void{
        cy.get(this.addToCartSelector).click();
    }
}
export{ProductsListPage}
