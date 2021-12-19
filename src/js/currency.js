class Currency {
    constructor() {
        this.currency = document.querySelector('.currency-select')
    }

    get currencyValue() {
        return this.currency.value;
    };
}
const currencyEl = new Currency();

export default currencyEl;