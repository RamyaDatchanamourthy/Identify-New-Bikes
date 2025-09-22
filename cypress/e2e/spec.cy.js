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

    it("should display upcoming Honda bikes under ₹4 lakh", () => {
    IdentifyNewBikes.clickUpcomingBikesTab();
    IdentifyNewBikes.getURL().should("eq", "https://www.zigwheels.com/upcoming-bikes")
 
    IdentifyNewBikes.filterHondaBikes().scrollIntoView().click()
    IdentifyNewBikes.getURL().should("eq", "https://www.zigwheels.com/upcoming-honda-bikes")
 
    IdentifyNewBikes.filterAndLogHondaBikesUnder4Lakh();
 
    cy.go(-2) // back to the home page
    IdentifyNewBikes.getURL().should("eq", 'https://www.zigwheels.com/')
  });

  it("should extract popular used car models in Chennai", () => {
    IdentifyNewBikes.getUsedCarsChennai().should("be.visible").click();
    IdentifyNewBikes.getURL().should("eq", "https://www.zigwheels.com/used-car/Chennai")
    IdentifyNewBikes.extractAndLogPopularUsedCarModels()
  });
 
 
  
})
