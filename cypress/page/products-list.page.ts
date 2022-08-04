class ProductsListPage{
    private addToCartSelector: string;
    private buttonContainer : string;

    constructor(){
        this.addToCartSelector = "[title='Add to cart']";
        this.buttonContainer = "[title='Proceed to checkout']";

    }
    public proceedToCheckout():void{
        cy.get(this.buttonContainer).click();
    }
    public addToCart():void{
        cy.get(this.addToCartSelector).click();
    }
}
export{ProductsListPage}
