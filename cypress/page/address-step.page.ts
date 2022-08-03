class AddressStepPage{
    private address : string;

    constructor(){
        this.address = ".cart_navigation button";
    }

    public proceedToCheckout(): void{
        cy.get(this.address).click();
    }
}
export{AddressStepPage}
