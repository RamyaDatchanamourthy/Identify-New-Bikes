class IdentifyNewBikes{
    visit(){
        cy.visit('https://www.zigwheels.com/');
    }
    NewBikesTab(){
        cy.get('#newBikes').within(() => {
        cy.get('.zwn-by_brand').within(() => {
        cy.get('.home-tab-bg-container').within(() => {
        cy.get('.pt-0').click();
    });
  });
});
    }
    UpcomingBikes(){
        cy.get('.upcoming-bike-tab',{timeout: 10000}).click();
        cy.contains('Upcoming Bikes',{timeout: 50000}).click();
    }
    SearchHonda(){
         cy.contains('Honda',{timeout: 50000}).click();
    }
    ExtractBikesDetails(){
        cy.get('li.modelItem').each(($el, index) => {
        const priceAttr = $el.attr('data-price');
        const price = parseFloat(priceAttr);

        if (price < 400000) {
        const bikeName = $el.find('strong.lnk-hvr').text().trim();
        const launchDate = $el.find('.clr-try.fnt-14').text().replace('Expected Launch :', '').trim();
        cy.log(`Bike: ${bikeName}`);
        cy.log(`Price: ₹${price}`);
        cy.log(`Launch: ${launchDate}`);
        if (index === 0) {
          cy.wrap($el).find('a[data-track-label="model-name"]').click();
        }
      }
    });
    }
    VerifyBikeDetails(){
        cy.get('a[title="Honda Activa 7G"][data-track-label="model-name"]').click();
        cy.url().should('include', '/honda-bikes/activa-7g');
        cy.contains('Honda Activa 7G').should('be.visible');
    }
    UsedCars(){
        cy.visit("https://www.zigwheels.com/")
        cy.get("#usedCars").find(".Chennai").click()
    }
    ExtractPopularModels(){
        let models = []
        cy.get(".popularModels").find("li").each((item) => {
        models.push(item.text())
        })
        .then(() => {
        models.forEach((modelName) => {
        cy.log(modelName)
      })
    })
    }
    Login(){
         cy.visit('https://www.zigwheels.com/')
        cy.get('#forum_login_title_lg').click();
    }
    UseGoogle(){
        cy.contains('Google').click();
    }

}
export default new IdentifyNewBikes();