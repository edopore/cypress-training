class LoginPage{
    private emailSelector : string;
    private passwordSelector : string;
    private submitSelector : string;

    constructor(){
        this.emailSelector = "#email";
        this.passwordSelector = "#passwd";
        this.submitSelector = "#SubmitLogin";
    }
    
    public logIn(email:string, password:string): void{
        cy.get(this.emailSelector).type(email); 
        cy.get(this.passwordSelector).type(password);
        cy.get(this.submitSelector).click();
    }
}
export{LoginPage}
