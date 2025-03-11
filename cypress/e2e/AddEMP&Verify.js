

describe('Add Emp & Verify added',()=>{

   before(()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.fixture("orangehrm1").then((data)=>{})
    cy.get("input[name='username']").type(data.username);
            cy.get("input[name='password']").type(data.password);
            cy.get("button[type='submit']").click();
            cy.get(".oxd-topbar-header-breadcrumb>h6").should('have.text', data.expected);
           cy.get('.oxd-main-menu-item').click();
            cy.get('.oxd-topbar-header-breadcrumb>h6').should('have.text','PIM');
             cy.get('.oxd-button.oxd-button--medium.oxd-button--secondary>i').click();
             cy.get("input[name='firstName']").type('Test202')
             cy.get("input[name='lastName']").type('last')
      cy.get("button[type='submit']").click();
      cy.get('.oxd-main-menu-item').click();



           })
})