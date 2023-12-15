
describe ('CssLocator', () => {
    it('csslocator', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.get("[name='username']").type("Admin")
        cy.get("[name='password']").type("admin123")
        cy.get(".oxd-button").click()
        cy.get(".orangehrm-dashboard-widget-name").contains("Time at Work")
    }) 

})