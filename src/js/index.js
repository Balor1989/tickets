import '../css/style.css'
import './plugins'
import { Api } from "./Api";
import { siteLink } from "./url";
import { Location } from "./Location";
import { FormAutocomplete } from './FormAutocomplete';
import { getAutocompleteInstance, getDatePickerInstance } from "./plugins/materialize"


const api = new Api(siteLink)

const location = new Location(api)

const formAutocomplete = new FormAutocomplete(getAutocompleteInstance, getDatePickerInstance)


document.addEventListener('DOMContentLoaded', () => {

    initApp();
    

    async function initApp()  {
        await location.init();
        formAutocomplete.setAutocomplete(location.citiesList)
    }

    async function onSubmitForm() {
        const origin = formAutocomplete.originValue;
        const destination = formAutocomplete.arrivalValue;
        const depart_date = formAutocomplete.departDateValue;
        const return_date = formAutocomplete.returnDateValue;

        console.log(origin, destination, depart_date, return_date)
    }
})