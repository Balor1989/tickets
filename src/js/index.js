import '../css/style.css'
import './plugins'
import location  from "./Location";
import formAutocomplete from './FormAutocomplete';
import currencyEl from './currency';
import tickets from './Tickets';
import  Loading  from './plugins/notiflix';


document.addEventListener('DOMContentLoaded', (e) => {

    initApp();
    const form = formAutocomplete.form;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        onSubmitForm()
    })

    async function initApp() {
        Loading.pulse()
        await location.init();
        Loading.remove()
        formAutocomplete.setAutocomplete(location.citiesList)
        
    }

    async function onSubmitForm() {
        Loading.pulse()
        const origin = location.getCityCodeByKey(formAutocomplete.originValue);
        const destination = location.getCityCodeByKey(formAutocomplete.arrivalValue);
        const depart_date = formAutocomplete.departDateValue;
        const return_date = formAutocomplete.returnDateValue;
        const currency = currencyEl.currencyValue;
console.log(origin,destination,depart_date,return_date)
        await location.fetchTickets({
            origin,
            destination,
            depart_date,
            return_date,
            currency
        });
        tickets.renderTickets(location.lastSearch)
        Loading.remove()
    }
})