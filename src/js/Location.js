

export class Location {

    constructor(api) {
    this.api = api
    this.countries = null,
    this.cities = null,
    this.citiesList = null
    }
    async init() {
        const response = await Promise.all([
            this.api.countries(),
            this.api.cities(),
        ]);
  
        const [countries, cities] = response
        this.countries = this.convertCountries(countries);
        this.cities = this.convertCities(cities)
        this.citiesList = this.createCitieslist(this.cities)
        return response;
    }
    createCitieslist(cities){
        return Object.entries(cities).reduce((acc, [key]) => {
            // console.log(key)
            acc[key] = null;
            return acc
        },{})
    }

    convertCountries(countries) {
        return countries.reduce((acc, country) => {
            acc[country.code] = country;
            return acc;
        },{})

    }
    getCounrtyNameByCode(code) {
        return this.countries[code].name;
    }

    convertCities(cities) {
        return cities.reduce((acc, city) => {
            const country_name = this.getCounrtyNameByCode(city.country_code)
            const key = `${city.name},${country_name}`;
            acc[key] = city;
            return acc
        },{})
   }
}

