import axios from "axios"


const siteLink = {
    url: 'https://aviasales-api.herokuapp.com/'
}

class Api {
    constructor(config) {
        this.url = config.url
    }
    async cities() {
        try {
            const response = await axios.get(`${this.config.url}cities`)
            const data = response.data
            return data
        }
        catch (error) {
            console.log(error)
            return Promise.reject(error)
       }
    };
        async countries() {
        try {
            const response = await axios.get(`${this.config.url}countries`)
            const data = response.data
            return data
        }
        catch (error) {
            console.log(error)
            return Promise.reject(error)
       }
    };
    
}
const api = new Api(siteLink)

// class Location {

//     constructor() {
//     this.api,
//     this.countries = null,
//     this.cities = null,
//     this.citiesList = null
//     }
//     async init() {
//         const response = await Promise.all([
//             this.api.countries(),
//             this.api.cities(),
//         ]);
  
//         const [countries, cities] = response
//         this.countries = this.convertCountries(countries);
//         this.cities = this.convertCities(cities)
//         this.citiesList = this.createCitieslist(this.cities)
//         return response;
//     }
//     createCitieslist(cities){
//         return Object.entries(cities).reduce((acc, [key]) => {
//             // console.log(key)
//             acc[key] = null;
//             return acc
//         },{})
//     }

//     convertCountries(countries) {
//         return countries.reduce((acc, country) => {
//             acc[country.code] = country;
//             return acc;
//         },{})

//     }
//     getCounrtyNameByCode(code) {
//         return this.countries[code].name;
//     }

//     convertCities(cities) {
//         return cities.reduce((acc, city) => {
//             const country_name = this.getCounrtyNameByCode(city.country_code)
//             const key = `${city.name},${country_name}`;
//             acc[key] = city;
//             return acc
//         },{})
//    }
// }


// const location = new Location(api)


// class FormAutocomplete {
    
//     constructor() {
//     this.form = document.querySelector('.form-section__autocomplete-form'),
//     this.origin = document.querySelector('.form-section__autocomplete-departure'),
//     this.arrival = document.querySelector('.form-section__autocomplete-arrival'),
//     this.departDate = document.querySelector('.form-section__depart-date'),
//     this.returnDate = document.querySelector('.form-section__return-date')
//      }
//     get formEl() {
//         return this.form
//     }
//     get originValue(){
//         return this.arrival.value
//     }
//     get departDateValue() {
//         return this.departDate.value
//     }
//     get returnDateValue() {
//         return this.departDate.value
//     }

// }

// const formAutocomplete = new FormAutocomplete()


// document.addEventListener('DOMContentLoaded', () => {
//     initApp()

//     const form = formAutocomplete.form
    
//     form.addEventListener('submit', event => {
//         event.preventDefault();
//         onFormSubmit();
// })

//     async function initApp() {
//         await location.init() 
//         console.log(response)
//     }
//     async function onFormSubmit() {
//         const origin = formAutocomplete.originValue;
//         const arrival = formAutocomplete.arrivalValue;
//         const depart_date = formAutocomplete.departDateValue;
//         const return_date = formAutocomplete.returnDateValue;

//         console.log(origin, arrival, depart_date, return_date)
//     }
// })