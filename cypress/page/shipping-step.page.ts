class ShippingStepPage{
    private checkBoxAgreement : string;
    private goToprocessCarrier : String;

    constructor(){
        this.checkBoxAgreement = "#cgv";
        this.goToprocessCarrier = ".cart_navigation button";
    }

    public checkAgreement():void{
        cy.get(this.checkBoxAgreement).click();
    }
    public proceedToCheckout(): void{
        cy.get(this.goToprocessCarrier).click();
    }
}
export{ShippingStepPage}
