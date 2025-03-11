import mainpage from "../PageObjects/mainpage.cy";
 const Mainpage = new mainpage;


    export function Dashboardpageverify(expected){
        Mainpage.Dashboardtxt().should('have.text',expected);
    }

    export function Logout(){
      Mainpage.Profilebtn().click();
      Mainpage.Logoutbtn().click();
      console.log(".........Logged Out...........")
    }
 export function Loginerror(exp){
  cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should('have.text',exp);
 }

