class LoginPage{
    private email : string;
    private password : string;
    private emailSelector : string;
    private passwordSelector : string;
    private submitSelector : string;

    constructor(){
        this.email = "aperdomobo@gmail.com";
        this.password = "WorkshopProtractor";
        this.emailSelector = "#email";
        this.passwordSelector = "#passwd";
        this.submitSelector = "#SubmitLogin";
    }
    
    public putEmailUser(): void{
        cy.get(this.emailSelector).type(this.email); 
    }
    public putPasswordUser(): void{
        cy.get(this.passwordSelector).type(this.password);
    }
    public goToAddressCheckout(): void{
        cy.get(this.submitSelector).click();
    }
}
export{LoginPage}
