import IdentifyNewBikes from '../support/pageobjects/IdentifyNewBikes';
 
describe("Identify New Bikes", () => {
  let formdata;
  beforeEach(() => {
    IdentifyNewBikes.visitHomePage();
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });

})