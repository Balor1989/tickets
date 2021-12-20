import { formatDate } from './date';
import api from './Api';

class Location {

    constructor(api, helpers) {
        this.api = api;
        this.countries = null;
        this.cities = null;
        this.citiesList = {};
        this.airlines = {};
        this.lastSearch = {};
        this.formatDate = helpers.formatDate;
    }
    async init() {
        const response = await Promise.all([
            this.api.countries(),
            this.api.cities(),
            this.api.airlines()
        ]);
  
        const [countries, cities, airlines] = response
        this.countries = this.convertCountries(countries);
        this.cities = this.convertCities(cities)
        this.citiesList = this.createCitieslist(this.cities)
        this.airlines = this.convertAirlines(airlines)
        console.log(this.airlines)
        return response;
    };
      getCounrtyNameByCode(code) {
        return this.countries[code].name;
    };

    getAirlineByCode(code) {
        return this.airlines[code] ? this.airlines[code].name : '';
    };
    getAirlineLogoByCode(code) {
        return this.airlines[code] ? this.airlines[code].logo : '';
    };

    getCityCodeByKey(key) {
        if (!key) {
            return
        }
        const city = Object.values(this.cities).find((item) => item.full_name === key)
        return city.code;
    };
    

    getCityNameByCode(code) {
        return this.cities[code].name;
    }

    createCitieslist(cities){
        return Object.entries(cities).reduce((acc, [,city]) => {
            // console.log(key)
            acc[city.full_name] = null;
            return acc
        },{})
    };

    convertCountries(countries) {
        return countries.reduce((acc, country) => {
            acc[country.code] = country;
            return acc;
        },{})
    };
  
    convertAirlines(airlines) {
        return airlines.reduce((acc, airline) => {
         airline.logo = `http://pics.avs.io/200/200/${airline.code}.png` 
            airline.name = airline.name || airline.name_translations.en;
            acc[airline.code] = airline;
            return acc;
    },{})    

    };

    convertCities(cities) {
        return cities.reduce((acc, city) => {
            const country_name = this.countries[city.country_code].name;
            city.name = city.name || city.name_translations.en;
            const full_name = `${city.name},${country_name}`;
            acc[city.code] = {
                ...city,
                country_name,
                full_name
            };
            return acc
        },{})
    };

    async fetchTickets(params) {
        const response = await this.api.prices(params)
        console.log(response.data)
        this.lastSearch = this.convertTickets(response.data);
        console.log(this.convertTickets(response.data))
    };

    convertTickets(tickets) {

        return Object.values(tickets).map(ticket => {
            return {
                ...ticket,
                origin_name: this.getCityNameByCode(ticket.origin),
                destination_name: this.getCityNameByCode(ticket.destination),
                airline_logo: this.getAirlineLogoByCode(ticket.airline),
                airline_name: this.getAirlineByCode(ticket.airline),
                expires_at: this.formatDate(ticket.expires_at, 'dd MMM yyyy hh:mm'),
                return_at: this.formatDate(ticket.return_at, 'dd MMM yyyy hh:mm')
            }
        });
    }
}


const location = new Location(api, { formatDate })
export default location;