
describe('Alert Test Cases ',()=>{

   beforeEach(()=>{
      cy.visit('https://www.selenium.dev/selenium/web/alerts.html#');
   })
   //Case to verify alert text
    it('Alert Text Verify',()=>{
     cy.get('#alert').click();
     cy.on('winndow:alert',(alerttext)=>{
        expect(alerttext).to.equal("cheese");
        cy.log('Alert :',alerttext);
     })
    })
    //Case to verify empty alert
    it('Case to verify empty alert',()=>{
      cy.get('#empty-alert').click()
       // This will verify alert is empty or not
      cy.on('window:alert',(alert1)=>{
         expect(alert1).to.be.empty;
      })
     })

     it('Alert type & Verify',()=>{

     // this event will trigger before click on alert and take control on alert
      cy.window().then((win)=>{
         //Take control window as prompt and returns text
         cy.stub(win,'prompt').returns('saikumar');
      })

      cy.get('#prompt').click();
      cy.get('#text > p').should('have.text','saikumar');
     })

     it('Alert text with Cancel',()=>{
      console.log("This case is to Type and cancel alert then verify text")

     // this event will trigger before click on alert and take control on alert
      cy.window().then((win)=>{
         //Take control window as prompt and returns text
         cy.stub(win,'prompt').returns('null');
      })

      cy.get('#prompt').click();
      cy.get('#text > p').should('have.text','null');
     })
     })
