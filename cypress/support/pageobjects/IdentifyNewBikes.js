class IdentifyNewBikes {
    visitHomePage() {
        cy.visit("https://www.zigwheels.com/");
    }
    
    getURL() {
        return cy.url()
    }
 
    getBanner() {
        return cy.get("#homeslider")
    }
}
export default new IdentifyNewBikes();