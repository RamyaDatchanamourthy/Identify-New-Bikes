import IdentifyNewBikes from '../support/pageobjects/IdentifyNewBikes';
 
describe("Identify New Bikes", () => {
  let formdata;
  beforeEach(() => {
    IdentifyNewBikes.visitHomePage();
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });
it("To verify that homepage loads correctly", () => {
    IdentifyNewBikes.getURL().should('eq', 'https://www.zigwheels.com/')
    IdentifyNewBikes.getBanner().should("be.visible")
    cy.scrollTo("bottom")
    cy.wait(2000)
 
  })
  
})
