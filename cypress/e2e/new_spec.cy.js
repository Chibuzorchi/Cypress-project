
describe('My First Test', () => { 
  it('verify title-positive', () => {
    // Steps

    cy.visit("https://opensource-demo.orangehrmlive.com/")
    cy.title().should("eq", "OrangeHRM")
  })

  it('verify title-Negative', () => {
    // Steps

    cy.visit("https://opensource-demo.orangehrmlive.com/")
    cy.title().should("eq", "OrangeHRM123")
  })


})