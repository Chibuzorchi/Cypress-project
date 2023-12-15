
describe ('XpathLocator', () => {

    it ('find no of product', () => {
    
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.xpath("//form[@class='oxd-form']/div").should('have.length',4)

    })


    it ('Chained xpath', () => {
    
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.xpath("//form[@class='oxd-form']").xpath('./div').should('have.length',4)

    })
    

    
})