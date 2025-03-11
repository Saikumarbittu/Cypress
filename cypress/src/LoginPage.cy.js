import LoginPageLocators from "../PageObjects/LoginPage.cy";


const Login_page = new LoginPageLocators;


export function VerifyLoginUi(){

   Login_page.emailbox().should('be.visible');

}

export function VerifyLoginvisit(email,password){
    Login_page.emailbox().type(email);
    Login_page.Passwordbox().type(password);
    Login_page.submitbtn().click();
    console.log("succsefully Login in page with email:"+email+"Password :"+password)
}
export function ForgotPW(){
      Login_page.forgetpwbtn.click();
      console.log("Successfully clicked forgot password button")
}
