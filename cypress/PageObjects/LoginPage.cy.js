
class LoginPageLocators{

    emailbox(){
        return cy.xpath("//input[@name='username']");
    }
    Passwordbox(){
return cy.xpath("//input[@name='password']");
    }
    submitbtn(){
    return cy.xpath("//button[@type='submit']");
    }

    Logininvaliderror(){
     return   cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text")
    }

forgetpwbtn(){
    return cy.xpath('//p[contains(., "Forgot Your Password?")]')
}
}export default LoginPageLocators