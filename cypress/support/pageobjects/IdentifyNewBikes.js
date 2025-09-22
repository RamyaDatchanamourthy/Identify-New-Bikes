class IdentifyNewBikes {
    visitHomePage() {
        cy.visit("https://www.zigwheels.com/");
    }

    clickUpcomingBikesTab() {
        cy.get(".upcoming-bike-tab").scrollIntoView().should("be.visible").click();
        cy.get("[title='All Upcoming Bikes']").click();   // selecting all upcoming ikes
 
    }

    filterHondaBikes() {
        return cy.get("[title='upcoming Honda bikes']")
    }

    extractPriceFromElement($el) {
        const rawPrice = $el.attr("data-price");
        return parseFloat(rawPrice);
    }
 
 
    logBikeDetails($el) {
        const price = this.extractPriceFromElement($el);
        const bikeName = $el.find(".txt-ulne").text().trim();
        const launchDate = $el.find(".clr-try").text().trim();
 
        cy.log(`Bike Name - ${bikeName}`);
        cy.log(`Price - ₹${price}`);
        cy.log(`${launchDate}`);
    }

    filterAndLogHondaBikesUnder4Lakh() {
        this.getUpcomingElements().each(($el) => {
            const price = this.extractPriceFromElement($el)
            if (price < 400000) {
                this.logBikeDetails($el)
            }
        });
    }
    getUpcomingElements() {
        return cy.get("#modelList").find("li");    // selecting all list elements
    }

    getUsedCarsChennai() {
        return cy.get("#usedCars").find(".Chennai").scrollIntoView()
    }

    extractAndLogPopularUsedCarModels() {
        this.getPopularUsedCarModels().then(($elements) => {
            const models = [];
            $elements.each((index, el) => {
                models.push(Cypress.$(el).text().trim());
            });
            models.forEach((model) => {
                cy.log(model);
            });
        });
    }

    getPopularUsedCarModels() {
        return cy.get(".popularModels").find("li");
    }
    
    getURL() {
        return cy.url()
    }
 
    getBanner() {
        return cy.get("#homeslider")
    }
}
export default new IdentifyNewBikes();