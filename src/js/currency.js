export class Currency {
    constructor() {
        this.currency = document.querySelector('.currency-select')
    }

    get currencyValue() {
        return this.currency.value;
    };
}