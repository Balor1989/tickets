import '../css/style.css'
import './plugins'
import { Api } from "./Api";
import { siteLink } from "./url";
import { Location } from "./Location";
import { FormAutocomplete } from './FormAutocomplete';
import { getAutocompleteInstance, getDatePickerInstance } from "./plugins/materialize"
import { Currency } from './currency';

const currencyEl = new Currency()

const api = new Api(siteLink)

const location = new Location(api)

const formAutocomplete = new FormAutocomplete(getAutocompleteInstance, getDatePickerInstance)


document.addEventListener('DOMContentLoaded', () => {

    initApp();
    const form = formAutocomplete.form;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        onSubmitForm()
    })

    async function initApp()  {
        await location.init();
        formAutocomplete.setAutocomplete(location.citiesList)
    }

    async function onSubmitForm() {
        const origin = location.getCityCodeByKey(formAutocomplete.originValue);
        const destination = location.getCityCodeByKey(formAutocomplete.arrivalValue);
        const depart_date = formAutocomplete.departDateValue;
        const return_date = formAutocomplete.returnDateValue;
        const currency = currencyEl.currencyValue;
        console.log(origin, destination, depart_date, return_date)
        await location.fetchTickets({
            origin,
            destination,
            depart_date,
            return_date,
            currency
        });
    }
})