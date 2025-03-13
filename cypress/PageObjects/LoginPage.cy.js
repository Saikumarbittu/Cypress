
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

forgetpwbtn(){
    return cy.get('.oxd-text.oxd-text--p.orangehrm-login-forgot-header')
}
}export default LoginPageLocators