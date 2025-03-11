import mainpage from "../PageObjects/mainpage.cy";
 const Mainpage = new mainpage;


    export function Dashboardpageverify(expected){
        Mainpage.Dashboardtxt().should('have.text',expected);
    }

    export function Logout(){
      Mainpage.Profilebtn().click();
      Mainpage.Logoutbtn().click();
    }


