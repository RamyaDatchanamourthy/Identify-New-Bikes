import IdentifyNewBikes from '../support/pageobjects/IdentifyNewBikes';
describe('Identify New Bikes', () =>{
    beforeEach(() => {
        IdentifyNewBikes.visit();
});
it('should navigate to New Bikes tab and open Upcoming Honda bikes', () => {
    IdentifyNewBikes.NewBikesTab();
    IdentifyNewBikes.UpcomingBikes();
    IdentifyNewBikes.SearchHonda();
  });

  it('should extract Honda bike details under ₹4 Lakh and verify Activa 7G page', () => {
    IdentifyNewBikes.NewBikesTab();
    IdentifyNewBikes.UpcomingBikes();
    IdentifyNewBikes.SearchHonda();
    IdentifyNewBikes.ExtractBikesDetails();
    IdentifyNewBikes.VerifyBikeDetails();
  });

  it('should navigate to Used Cars in Chennai and log popular models', () => {
    IdentifyNewBikes.UsedCars();
    IdentifyNewBikes.ExtractPopularModels();
  });

  it('should open login modal and click on Google login', () => {
    IdentifyNewBikes.Login();
    IdentifyNewBikes.UseGoogle();
  });

})