class PaymentStepPage{
    private bankWire: string;

    constructor(){
        this.bankWire = ".bankwire";
    }

    public bankWireclick():void{
      cy.get(this.bankWire).click();
    }
}
export{PaymentStepPage}
