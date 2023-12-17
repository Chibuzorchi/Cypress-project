describe ("Assertions", () => {

    it ("Implicit assertions", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // cy.url().should('include', 'orangehrmlive.com')
        // cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.url().should('contain', 'ngehrm')

        cy.url().should('include', 'orangehrmlive.com')
        .should('not.eq', 'https://opensource-demo.orangehrmlive.com/web/index.ph/login')
        .should('not.contain', 'fiji')

        cy.url().should('include', 'orangehrmlive.com')
        .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain', 'ngehrm')

        cy.title().should('include', 'Orange')
        .and('eq', 'OrangeHRM')
        .and('not.contain', 'Mango')
        .and('contain', 'HRM')

        cy.get('.orangehrm-login-branding > img').should('be.visible')
        .and('exist')

        cy.xpath('//a').should('have.length', '5')

        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Username']").should('have.value', 'Admin')
    })
})