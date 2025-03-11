import { VerifyLoginUi,VerifyLoginvisit } from "../src/LoginPage.cy";
import {Dashboardpageverify, Logout} from  "../src/MainPage.cy";


describe('LoginPage', () => {
    beforeEach(()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",{ waitUntil: "domcontentloaded" });
        //If you're dealing with large data responses (e.g., JSON APIs).When you want to reduce bandwidth usage.
        //Some APIs might not support compression, so test before enforcing this header.
    })
    it('LoginPage with single Valid Credentials', () => {
        cy.fixture("orangehrm1.json").then((data) => {
          VerifyLoginvisit(data.username,data.password);
          Dashboardpageverify(data.expected);
          cy.window().its('document.readyState').should('eq', 'complete');
          Logout();
        });
    });
    //Verify login with multiple creds
    it('Login with multiple creds',()=>
    {
        cy.fixture("orangehrm").then((userdata)=>{
         userdata.forEach((data2)=>{
         VerifyLoginvisit(data2.username,data2.password)
       if( data2.username == 'Admin' && data2.password=='admin123'){
        Dashboardpageverify(data2.expected);
        Logout()
}
    else{
        Logininvalidcheck(data2.expected);

    }
         })

         })
        })
    })

