import 'cypress-iframe'
describe('dropdown',()=>{
    it('select Tag or Static dropdown',()=>{
        cy.visit('https://practice.expandtesting.com/dropdown')
            cy.get("#dropdown").select('Option 1').should('have.value','1');
        cy.get('#country').select('India').should('have.value','IN')

    })

    it('Dynamic Dropdown',()=>{

       cy.visit('https://www.jotform.com/form/232851259741056')
       cy.wait(3000)
       cy.frameLoaded('#customFieldFrame_6');
       cy.iframe()
       .find('#select2-mcrq-container')  // Target the container of the dynamic dropdown
       .click();

       cy.iframe()
       .find('.select2-search__field')  // Locate the search input within the dropdown
       .type('Group C')
       .type('{enter}');  // Press Enter to select the option
    })
})