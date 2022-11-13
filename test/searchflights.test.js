const flightsPage = require('../pages/flights.page')
const searchData = require('../testData/searchData')

describe('Search flight',()=>{
    // Test Scenario - 01
    it('Search Economy class round-trip flights for 1 adult ', async ()=>{
        await flightsPage.roundTripFlight(searchData.cityFrom, searchData.cityTo);

    })
    // Test Scenario - 02
    it('Search Economy class round-trip flights for multiple travellers', async ()=>{
        await flightsPage.roundTripWithNTravelers(searchData.cityFrom, searchData.cityTo, searchData.travellersCount);

    })

    // Test Scenario - 03
    it('Search Business class flights for one way trip', async ()=>{
        await flightsPage.oneWayTripFlight(searchData.cityFrom,searchData.cityTo,searchData.cabinClassBusiness);

    })
    // Test Scenario - 04
    it('Search First class flights for one way trip', async ()=>{
        await flightsPage.oneWayTripFlight(searchData.cityFrom,searchData.cityTo,searchData.cabinClassFirst);

    })

    // Test Scenario - 05
    it('Search Business and First class flights for multicity trip with specific time', async ()=>{
        await flightsPage.multiCityTripWithSpecificTime();

    })
    // Test Scenario - 06
    it('Search Economy class round-trip flights without date selection ', async ()=>{
        await flightsPage.roundTripFlightWithoutDate(searchData.cityFrom, searchData.cityTo);

    })

})