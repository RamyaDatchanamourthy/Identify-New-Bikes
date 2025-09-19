import IdentifyNewBikes from '../support/pageobjects/IdentifyNewBikes';

describe("Identify New Bikes", () => {
  beforeEach(() => {
    IdentifyNewBikes.visitHomePage();
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });

  it("should display upcoming Honda bikes under ₹4 lakh", () => {
    cy.wait(1000)
    IdentifyNewBikes.clickUpcomingBikesTab();
    IdentifyNewBikes.getUpcomingBikeElements().each(($el) => {
      const price = parseFloat($el.attr("data-price"));
      if (price < 400000) {
        const bikeName = $el.find(".txt-ulne").text().trim();
        const launchDate = $el.find(".clr-try").text().trim();
        cy.log("Bike Name - " + bikeName);
        cy.log("Price - " + price);
        cy.log(launchDate);
        cy.wait(1000)
      }
    });
  });

  it("should extract popular used car models in Chennai", () => {
    IdentifyNewBikes.visitHomePage()
    IdentifyNewBikes.clickUsedCarsChennai();
    cy.wait(1000)
    let models = [];
    IdentifyNewBikes.getPopularUsedCarModels().each(($el) => {
      models.push($el.text().trim());
    }).then(() => {
      models.forEach((model) => {
        cy.log(model);
      });
    });
  });

  it("should simulate Google login and capture error message", () => {
    IdentifyNewBikes.openLoginModal();
    IdentifyNewBikes.clickGoogleSignIn();

  });
});







