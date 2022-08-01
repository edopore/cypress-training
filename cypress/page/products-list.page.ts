class ProductsListPage{
    private checkPayment: string;
    private checkOrder : string;
    private checkText : string;
    private checkOrderOnStore : string;

    constructor(){
        this.checkPayment = "#cart_navigation > [type='submit']";
        this.checkOrder = "#center_column > div > p > strong";
        this.checkText = "have.text";
        this.checkOrderOnStore = "Your order on My Store is complete.";
    }

    public clickOncheckout():void{
        cy.get(this.checkPayment).click();
    }
    public checkOrderFinal():void{
        cy.get(this.checkOrder).should(
            this.checkText,
            this.checkOrderOnStore,
        );
    }
}
export{ProductsListPage}