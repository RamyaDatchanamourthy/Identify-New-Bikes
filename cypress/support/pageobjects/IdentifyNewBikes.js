class IdentifyNewBikes {
    visitHomePage() {
        cy.visit("https://www.zigwheels.com/");
    }

    clickUpcomingBikesTab() {
        cy.get(".upcoming-bike-tab").click();
        cy.get("[title='All Upcoming Bikes']").click();
        cy.get("[title='upcoming Honda bikes']").click();
    }

    getUpcomingBikeElements() {
        return cy.get("#modelList").find("li");
    }

    clickUsedCarsChennai() {
        cy.get("#usedCars").find(".Chennai").click({ force: true });
    }

    getPopularUsedCarModels() {
        return cy.get(".popularModels").find("li");
    }

    openLoginModal() {
        cy.get("#forum_login_cover_image_sm").click({ force: true });
    }

    clickGoogleSignIn() {
        cy.get(".googleSignIn").click();
    }
}

export default new IdentifyNewBikes();
