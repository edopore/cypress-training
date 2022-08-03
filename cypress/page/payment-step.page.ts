class PaymentStepPage{
    private bankWire: string;
    private checkOrder : string;
    private checkPayment: string;
    
    constructor(){
        this.bankWire = ".bankwire";
        this.checkOrder = "#center_column > div > p > strong";
        this.checkPayment = "#cart_navigation > [type='submit']";
    }

    public bankWireclick():void{
      cy.get(this.bankWire).click();
    }
    public verifyFinalOrderMessage(checkText:string, checkOrderOnStoreMessage:string):void{
      cy.get(this.checkOrder).should(
          checkText,
          checkOrderOnStoreMessage,
      );
    }
    public clickOncheckout():void{
      cy.get(this.checkPayment).click();
    }
}
export{PaymentStepPage}
