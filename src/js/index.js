import '../css/style.css'
import './plugins'
import api from './Api'
import {Location}  from "./Location";
import formAutocomplete from './FormAutocomplete'
import currencyEl from './currency';
import { formatDate } from './date';






const location = new Location(api, { formatDate })




document.addEventListener('DOMContentLoaded', (e) => {

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

        await location.fetchTickets({
            origin,
            destination,
            depart_date,
            return_date,
            currency
        });
    }
})