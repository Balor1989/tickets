class Currency {
    constructor() {
        this.currency = document.querySelector('.currency-select')
        this.dictionary = {
            USD: '&#36',
            EUR: '&#8364',
            UAH: '&#8372'
       }
    }

    get currencyValue() {
        return this.currency.value;
    };
    getСurrencySymbol() {
        return this.dictionary[this.currencyValue]
    }
}
const currencyEl = new Currency();

export default currencyEl;