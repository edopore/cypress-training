class PaymentStepPage{
    private bankWire: string;
    private checkOrder : string;
    private checkPayment: string;
    private checkText : string;
    
    constructor(){
        this.bankWire = ".bankwire";
        this.checkOrder = "#center_column > div > p > strong";
        this.checkPayment = "#cart_navigation button";
        this.checkText = "have.text";
    }

    public bankWireclick():void{
      cy.get(this.bankWire).click();
    }
    public verifyFinalOrderMessage(checkOrderOnStoreMessage:string):void{
      cy.get(this.checkOrder).should(
          this.checkText,
          checkOrderOnStoreMessage,
      );
    }
    public clickOncheckout():void{
      cy.get(this.checkPayment).click();
    }
}
export{PaymentStepPage}
