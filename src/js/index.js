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

location.init().then(response => {
    console.log(response)
})
