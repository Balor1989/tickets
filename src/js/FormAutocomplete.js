import { getAutocompleteInstance, getDatePickerInstance } from "./plugins/materialize"
 class FormAutocomplete {
    
    constructor(autocomplete, datepicker) {
    this.form = document.querySelector('.autocomplete-form'),
    this.origin = document.querySelector('.autocomplete-origin'),
    this.arrival = document.querySelector('.autocomplete-destination'),
    this.departDate = document.querySelector('.depart-date'),
    this.returnDate = document.querySelector('.return-date'),
    this.originAutocomplete = autocomplete(this.origin),
    this.arrivalAutocomplete = autocomplete(this.arrival),
    this.departDatePicker = datepicker(this.departDate),
    this.returnDatePicker = datepicker(this.returnDate)
     }
    get formEl() {
        return this.form
    }
    get originValue(){
        return this.origin.value
    }
     get arrivalValue(){
        return this.arrival.value
    }
    get departDateValue() {
        return this.departDate.value.toString()
    }
    get returnDateValue() {
        return this.departDate.value.toString()
    }
    setAutocomplete(data) {
        this.originAutocomplete.updateData(data)
        this.arrivalAutocomplete.updateData(data)
    }
}

const formAutocomplete = new FormAutocomplete(getAutocompleteInstance, getDatePickerInstance)

export default formAutocomplete;