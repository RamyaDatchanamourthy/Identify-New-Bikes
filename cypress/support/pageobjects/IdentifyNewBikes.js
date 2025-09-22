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
    clickUpcomingCarsTab() {
        cy.get(".upcoming-car-tab").scrollIntoView().click();
        cy.get("[title='All Upcoming Cars']").click({ force: true })

    }
    getDropdown() {
        return cy.get("#sorting")
    }

    // In IdentifyNewBikes.js

    verifyUpcomingCarsSortedByPriceAsc() {
        this.getDropdown().select("price-asc");
        this.getUpcomingElements().then(($elements) => {
            const prices = [];
            $elements.each((index, el) => {
                const price = this.extractPriceFromElement(Cypress.$(el));
                prices.push(price);
            });
            const sortedPriceArray = [...prices].sort((a, b) => a - b);
            expect(prices).to.deep.equal(sortedPriceArray);
            expect(prices[0]).to.equal(sortedPriceArray[0]);
        });
    }


    getURL() {
        return cy.url()
    }

    getBanner() {
        return cy.get("#homeslider")
    }

    openLoginModal() {
        cy.get("#forum_login_cover_image_sm").click({ force: true });
    }

    clickGoogleSignIn() {
        cy.get(".googleSignIn").click();
    }

    getSellerDetailsButton() {
        return cy.get(".contactSellerbtn")
    }

    getInputElement() {
        return cy.get("input[type='tel']:visible")
    }

    getErrorMessage() {
        return cy.get(".error").invoke("text")
    }

    getOTPButton() {
        return cy.get(".button.submitButton")
    }


}
export default new IdentifyNewBikes();