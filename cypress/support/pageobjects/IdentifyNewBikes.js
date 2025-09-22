class IdentifyNewBikes {
    visitHomePage() {
        cy.visit("https://www.zigwheels.com/");
    }
    
}
export default new IdentifyNewBikes();