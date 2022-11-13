const flightsPage = require('../pages/flights.page')

describe('Search flight',()=>{
    // Test Scenario - 01
    it('Search Economy class round-trip flights for 1 adult ', async ()=>{
        await flightsPage.open("/");
        await browser.maximizeWindow();
        await flightsPage.roundTripFlight("Dhaka", "Cox Bazar");

    })
    // Test Scenario - 02
    it('Search Economy class round-trip flights for multiple travellers', async ()=>{
        await flightsPage.open("/");
        await browser.maximizeWindow();
        await flightsPage.roundTripWithNTravelers("Dhaka", "Cox Bazar", 3);

    })

    // Test Scenario - 03
    it('Search Business class flights for one way trip', async ()=>{
        await flightsPage.open("/");
        await browser.maximizeWindow();
        await flightsPage.oneWayTripFlight("Dhaka", "Cox Bazar", 'BUSINESS');

    })
    // Test Scenario - 04
    it('Search First class flights for one way trip', async ()=>{
        await flightsPage.open("/");
        await browser.maximizeWindow();
        await flightsPage.oneWayTripFlight("Dhaka", "Cox Bazar", 'FIRST');

    })

    // Test Scenario - 05
    it('Search Business and First class flights for multicity trip with specific time', async ()=>{
        await flightsPage.open("/");
        await browser.maximizeWindow();
        await flightsPage.multiCityTripWithSpecificTime();

    })
    // Test Scenario - 06
    it('Search Economy class round-trip flights without date selection ', async ()=>{
        await flightsPage.open("/");
        await browser.maximizeWindow();
        await flightsPage.roundTripFlightWithoutDate("Dhaka", "Cox Bazar");

    })

})