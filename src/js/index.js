import '../css/style.css'
import { Api } from "./Api";
import { siteLink } from "./url";
import { Location } from "./Location";

const api = new Api(siteLink)
const location = new Location(api)
location.init().then(response => {
    console.log(response)
})
