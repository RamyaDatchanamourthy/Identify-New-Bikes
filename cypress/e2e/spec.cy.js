import IdentifyNewBikes from '../support/pageobjects/IdentifyNewBikes';

describe("Identify New Bikes", () => {
  let formdata;
  beforeEach(() => {
    IdentifyNewBikes.visitHomePage();
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });
  before(() => {
    cy.fixture("form").then((data) => {
      formdata = data
    })
  })
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

    cy.go(-2)
    IdentifyNewBikes.getURL().should("eq", 'https://www.zigwheels.com/')
  });

  it("should extract popular used car models in Chennai", () => {
    IdentifyNewBikes.getUsedCarsChennai().should("be.visible").click();
    IdentifyNewBikes.getURL().should("eq", "https://www.zigwheels.com/used-car/Chennai")
    IdentifyNewBikes.extractAndLogPopularUsedCarModels()
  });

  it("Verify sorting of all upcoming cars by price (Low to High)", () => {
    IdentifyNewBikes.clickUpcomingCarsTab()
    IdentifyNewBikes.getURL().should("eq", "https://www.zigwheels.com/upcoming-cars")
    IdentifyNewBikes.getDropdown().select("price-asc")
    IdentifyNewBikes.verifyUpcomingCarsSortedByPriceAsc();

  })

  it("should simulate Google login and capture error message", () => {
    IdentifyNewBikes.openLoginModal();
    IdentifyNewBikes.clickGoogleSignIn();

  });

  it("Validate error message when entering an invalid phone number in View Seller Details form under Used Cars", () => {
    IdentifyNewBikes.getUsedCarsChennai().should("be.visible").click();
    IdentifyNewBikes.getSellerDetailsButton().first().click()
    IdentifyNewBikes.getInputElement().type(formdata.mobilenumber1)
    IdentifyNewBikes.getErrorMessage().should("eq", "Please enter valid mobile number")


  })



})
