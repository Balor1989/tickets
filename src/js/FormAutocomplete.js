
export class FormAutocomplete {
    
    constructor(autocomplete, datepicker) {
    this.form = document.querySelector('.utocomplete-form'),
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
        return this.arrival.value
    }
    get departDateValue() {
        return this.departDate.value
    }
    get returnDateValue() {
        return this.departDate.value
    }

}

