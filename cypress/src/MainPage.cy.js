import mainpage from "../PageObjects/mainpage.cy";
 const Mainpage = new mainpage;


    export function Dashboardpageverify(expected){
        Mainpage.Dashboardtxt().should('have.text',expected);

    }

    export function Logout(){
      Mainpage.Profilebtn().click();
      Mainpage.Logoutbtn().click();
      console.log(".........Logged Out...........")// this line will print in browser console
      cy.log("Logged out")//print in Cypress UI
      cy.task('logMessage', "Logged out"); // Print in VS code terminal
    }
 export function Loginerror(exp){
  cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should('have.text',exp);
  cy.log("Invalid credentials error is verified")//print in Cypress UI
      cy.task('logMessage', "Invalid credentials error is verified"); // Print in VS code terminal
 }

