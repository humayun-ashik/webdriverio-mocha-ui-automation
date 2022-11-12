

const flightsPage = require('../pages/flights.page')

describe('Search flight',()=>{
    it('Search Economy class round-trip flights for 1 adult ', async ()=>{
        await flightsPage.open("/");
        await browser.maximizeWindow();
        await flightsPage.roundTripFlight("Dhaka", "Cox Bazar");

    })
    it('Search Economy class round-trip flights for multiple travellers', async ()=>{
        await flightsPage.open("/");
        await browser.maximizeWindow();
        await flightsPage.roundTripWithNTravelers("Dhaka", "Cox Bazar", 3);

    })

    it('Search Business class flights for one way trip', async ()=>{
        await flightsPage.open("/");
        await browser.maximizeWindow();
        await flightsPage.oneWayTripFlight("Dhaka", "Cox Bazar", 'BUSINESS');

    })

    it('Search First class flights for one way trip', async ()=>{
        await flightsPage.open("/");
        await browser.maximizeWindow();
        await flightsPage.oneWayTripFlight("Dhaka", "Cox Bazar", 'FIRST');

    })

    it('Search Economy class flights for multicity trip', async ()=>{
        await flightsPage.open("/");
        await browser.maximizeWindow();
        await flightsPage.multiCityTrip();

    })

})