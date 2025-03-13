import LoginPageLocators from "../PageObjects/LoginPage.cy";


const Login_page = new LoginPageLocators;


export function VerifyLoginUi(){

   Login_page.emailbox().should('be.visible');

}

export function VerifyLoginvisit(email,password){
    try{
    Login_page.emailbox().type(email);
    Login_page.Passwordbox().type(password);
    Login_page.submitbtn().click();
    cy.log("succsefully Login in page with email:"+email+"Password :"+password)
    cy.log("Login Successful");
    console.log("Login Successful");

} catch (error) {
cy.log("An error occurred during login: ", error.message);
console.error("An error occurred during login: ", error);
}}

export function ForgotPW(){
      Login_page.forgetpwbtn().click();
      cy.get('.oxd-text.oxd-text--h6.orangehrm-forgot-password-title').should('be.visible');
      cy.url().should('contain', 'requestPassword')
      console.log("Successfully clicked forgot password button & Verified page")
}
