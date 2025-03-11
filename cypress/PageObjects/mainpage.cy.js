class mainpage{

       Dashboardtxt(){
        return  cy.get(".oxd-topbar-header-breadcrumb>h6");
          }
       Profilebtn(){
         return cy.get('.oxd-userdropdown-tab')
       }
       Logoutbtn(){
       return cy.get(':nth-child(4) > .oxd-userdropdown-link')
       }
       }export default mainpage


