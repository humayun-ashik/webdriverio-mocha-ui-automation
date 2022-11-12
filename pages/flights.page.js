const AbstractPage = require('./abstract.page');
const elementUtil = require('../util/elementUtil')

class FlightsPage extends AbstractPage{
    async open(path) {
        return super.open(path);
    }

    // Getter methods for page locators
    get roundTripLink(){
        return $("//span[normalize-space()='Round-trip']");
    }
    get oneWayTripLink(){
        return $("//span[normalize-space()='One-way']");
    }
    get multicityTripLink(){
        return $("//span[normalize-space()='Multi-city']");
    }
    get departureCity() {
        return $("[name='origin']");
    }
    get departureCity1() {
        return $("[name='origin0']");
    }
    get departureCity2() {
        return $("[name='origin1']");
    }
    get destinationCity() {
        return $("[name='destination']");
    }
    get destinationCity1() {
        return $("[name='destination0']");
    }
    get destinationCity2() {
        return $("[name='destination1']");
    }
    get departureDate(){
        return $("(//div[@class='dateInput size-l'])[1]");
    }
    get departureDate1(){
        return $("//div[@aria-label='Flight 1 - Departure date input']");
    }
    get departureDate2(){
        return $("//div[@aria-label='Flight 2 - Departure date input']");
    }
    get toDate(){
        return $(".today");
    }
    get returnDate(){
        return $("(//div[@class='dateInput size-l'])[2]");
    }
    get cabinClassOption(){
        return $("//div[@class='col-travelers col-field']//div[@class='fieldBlock travelersBlock']");
    }
    get businessClass(){
        return $("//span[normalize-space()='Business']");
    }
    get economyClass(){
        return $("//span[normalize-space()='Economy']");
    }
    get firstClass(){
        return $("//span[normalize-space()='First']");
    }
    get incrementAdultTravelersIcon(){
        return $("(//span[@class='icon plus'])[1]");
    }
    get incrementStudentTravelersIcon(){
        return $("(//span[@class='icon plus'])[2]");
    }
    get incrementSeniorTravelersIcon(){
        return $("(//span[@class='icon plus'])[3]");
    }
    get incrementYouthTravelersIcon(){
        return $("(//span[@class='icon plus'])[4]");
    }
    get incrementChildrenTravelersIcon(){
        return $("(//span[@class='icon plus'])[5]");
    }
    get searchButton(){
        return $("(//div[@class='fieldBlock buttonBlock'])[1]");
    }
    get searchButton(){
        return $("(//div[@class='fieldBlock buttonBlock'])[1]");
    }
    get multiCitySearchButton(){
        return $("span[class='v-c-p centre ']");
    }

    // Page actions
    async setDepartureCity(city){
        await elementUtil.doClearValue(this.departureCity);
        await elementUtil.doSetValue(this.departureCity, city);
        await browser.pause(2000);
    }
    async setDepartureMultiCity(city, element){
        await elementUtil.doClearValue(element);
        await elementUtil.doSetValue(element, city);
        await browser.pause(2000);
    }
    async setReturnCity(city){
        await elementUtil.doClearValue(this.destinationCity);
        await elementUtil.doSetValue(this.destinationCity, city);
        await browser.pause(2000);
    }
    async setReturnMultiCity(city, element){
        await elementUtil.doClearValue(element);
        await elementUtil.doSetValue(element, city);
        await browser.pause(2000);
    }
    async setDepartureDate(){
        await elementUtil.doClick(this.departureDate);
        await elementUtil.doClick(this.toDate);

    }
    async setDepartureMultiDate(element){
        await elementUtil.doClick(element);
        await elementUtil.doClick(this.toDate);

    }
    async setReturnDate(){
        await elementUtil.doClick(this.returnDate);
        await elementUtil.doClick(this.toDate);
    }
    async clickCabinNTravellersSelection(){
        await elementUtil.doClick(this.cabinClassOption)
    }
    async setCabinClass(cabinType){
        if(cabinType=='ECONOMY'){
            await elementUtil.doClick(this.economyClass);
        }
        else if(cabinType=='BUSINESS'){
            await elementUtil.doClick(this.businessClass);
        }
        else if (cabinType=='FIRST'){
            await elementUtil.doClick(this.firstClass);
        }

    }
    async incrementTravelers(travellerType, count){
        let element = "";
        if(travellerType=='ADULT'){
            element = this.incrementAdultTravelersIcon;
        }
        else if(travellerType=='STUDENT'){
            element = this.incrementStudentTravelersIcon;
        }
        else if(travellerType=='SENIOR'){
            element = this.incrementSeniorTravelersIcon;
        }
        else if(travellerType=='YOUTH'){
            element = this.incrementYouthTravelersIcon;
        }
        else if(travellerType=='CHILDREN'){
            element = this.incrementChildrenTravelersIcon;
        }
        let i = 1;
        for (i=1;i<count;i++){
            await elementUtil.doClick(element)
            await browser.pause(1000);

        }
    }
    async clickSearchButton(){
        await elementUtil.doClick(this.searchButton);
        await browser.pause(3000);
    }
    async clickMultiCitySearchButton(element){
        await elementUtil.doClick(element);
        await browser.pause(3000);
    }

    async prepareMulticityData(){
        await this.setDepartureMultiCity("Dhaka", this.departureCity1);
        await this.setReturnMultiCity("Cox Bazar", this.destinationCity1 );
        await this.setDepartureMultiDate(this.departureDate1);

        await this.setDepartureMultiCity("Cox Bazar", this.departureCity2);
        await this.setReturnMultiCity("Dhaka", this.destinationCity2);
        await this.setDepartureMultiDate(this.departureDate2);

    }


    // Helper functions
    async roundTripFlight(CityFrom, CityTo) {
        await this.setDepartureCity(CityFrom);
        await this.setReturnCity(CityTo);
        await this.setDepartureDate();
        await this.setReturnDate();
        await this.clickSearchButton();


    }
    async roundTripWithNTravelers(CityFrom, CityTo, count){
        await this.setDepartureCity(CityFrom);
        await this.setReturnCity(CityTo);
        await this.setDepartureDate();
        await this.setReturnDate();
        await this.clickCabinNTravellersSelection();
        await this.incrementTravelers('ADULT',count);
        await this.incrementTravelers('CHILDREN',count);
        await this.clickSearchButton();

    }
    async oneWayTripFlight(cityFrom, cityTo, cabinClass){
        await elementUtil.doClick(this.oneWayTripLink);
        await this.setDepartureCity(cityFrom);
        await this.setReturnCity(cityTo);
        await this.setDepartureDate();
        await this.clickCabinNTravellersSelection();
        await this.setCabinClass(cabinClass);
        await this.clickSearchButton();

    }
    async multiCityTrip(){
        await elementUtil.doClick(this.multicityTripLink)
        await this.prepareMulticityData();
        await this.clickMultiCitySearchButton(this.multiCitySearchButton);

    }


}

module.exports = new FlightsPage();