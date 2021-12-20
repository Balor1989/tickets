import currencyEl from "./currency";

class Tickets {
    constructor(currency) {
        this.container = document.querySelector('.card-list')
        this.currencySymbol = currencyEl.getСurrencySymbol
    }

    renderTickets(tickets) {
        this.clearContainer();
        if (!tickets.length) {
            this.showEmptyMessage()
            return;
        }
        let fragment = '';
        const currency = currencyEl.getСurrencySymbol()
        tickets.forEach(ticket => {
            const template = Tickets.ticketsTemplate(ticket, currency)
            fragment += template;
            
        })
        this.container.insertAdjacentHTML('afterbegin', fragment)
    }

    clearContainer() {
        this.container.innerHTML = '';
    }

    showEmptyMessage() {
        const template = Tickets.showEmptyMessage();
        this.container.insertAdjacentHTML('afterbegin', template)

    }

    static emptyMessageTemplate() {
        return `<div class ="empty-box">
        <p class="empty-description">По вашему запросу ничего не найдено!</p>
        </div>`
    }

    static ticketsTemplate(ticket, symbol) {
        if (!ticket.airline_logo) {
            ticket.airline_logo = 'https://cdn.pixabay.com/photo/2017/01/08/07/49/travel-1962322__340.png'
        }
        if (!ticket.airline_name) {
            ticket.airline_name = 'Неизвестная компания'
        }
        return `<div class="ticket-box">
            <div class="ticket-card">
                <div class="ticket-airline">
                    <img src="${ticket.airline_logo}" class="ticket-airline-img" />
                    <span class="ticket-airline-name">${ticket.airline_name}</span>
                </div>
                <div class="tickets-information-box">
                    <div class="ticket-origin">
                        <span class="ticket-city-from">${ticket.origin_name}</span>
                        <i class="small material-icons">flight_takeoff</i>
                    </div>
                    <div class="ticket-destination">
                        <i class="small material-icons">flight_land</i>
                        <span class="ticket-city-to">${ticket.destination_name}</span>
                    </div>
                </div>
                <div class="ticket-time-price">
                    <span class="ticket-time-departure">${ticket.expires_at}</span>
                    <span class="ticket-price">${symbol} ${ticket.price}</span>
                </div>
                <div class="ticket-additional-info">
                    <span class="ticket-transfers">Пересадок: ${ticket.transfers}</span>
                    <span class="ticket-flight-number">Номер рейса: ${ticket.flight_number}</span>
                </div>
            </div>
        </div>`
    }
}

const tickets = new Tickets(currencyEl);

export default tickets;