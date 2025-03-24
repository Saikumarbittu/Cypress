import 'cypress-iframe'
describe('dropdown',()=>{
    it('select Tag or Static dropdown',()=>{
        cy.visit('https://practice.expandtesting.com/dropdown')
            cy.get("#dropdown").select('Option 1').should('have.value','1');
        cy.get('#country').select('India').should('have.value','IN')

    })

//     it('Dynamic Dropdown',()=>{

//         cy.get('iframe')
//         .its('0.contentDocument.body')
//         .should('not.be.empty')
//         .then(cy.wrap)
//         .find('#element-id')
//         .click();

//        cy.iframe()
//        .find('.select2-search__field')  // Locate the search input within the dropdown
//        .type('Group C')
//        .type('{enter}');  // Press Enter to select the option
//     })
 })