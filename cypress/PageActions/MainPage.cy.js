import mainpage from '../PageObjects/mainpage.cy'
const pbobj=new mainpage;

    export function Dashboardpageverify(expected){
      pbobj.Dashboardtxt().should('have.text',expected);
    }

    export function Logout(){
      pbobj.Profilebtn().click();
      pbobj.Logoutbtn().click();
      console.log(".........Logged Out...........")// this line will print in browser console
      cy.log("Logged out")//print in Cypress UI
      cy.task('logMessage', "Logged out"); // Print in VS code terminal
    }
    export function Clickonmenu(){
      Menubtn().click();
      sidemenuall().filter(':contains("PIM")').should('have.text',PIM).click();
    }
