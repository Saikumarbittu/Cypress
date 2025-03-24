import LoginPageLocators from "../PageObjects/LoginPage.cy";


export function VerifyLoginUi(){

   Login_page.emailbox().should('be.visible');

}

export function VerifyLoginvisit(email,password){
    try{
    emailbox().type(email);
    Passwordbox().type(password);
    submitbtn().click();
    cy.log("succsefully Login in page with email:"+email+"Password :"+password)
    cy.log("Login Successful");
    console.log("Login Successful");

} catch (error) {
cy.log("An error occurred during login: ", error.message);
console.error("An error occurred during login: ", error);
}}

export function ForgotPW(){
    forgetpwbtn().click();
      cy.get('.oxd-text.oxd-text--h6.orangehrm-forgot-password-title').should('be.visible');
      cy.url().should('contain', 'requestPassword')
      console.log("Successfully clicked forgot password button & Verified page")
}
