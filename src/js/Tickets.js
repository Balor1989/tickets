class Tickets {
    constructor() {
        this.container = document.querySelector('.card-list')
    }

    renderTickets(tickets) {
        this.clearContainer();
        if (!tickets.length) {
            this.showEmptyMessage()
            return;
        }
        let fragment = '';
        tickets.forEach(ticket => {
            const template = Tickets.ticketsTemplate(ticket)
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

    static emptyMessageTemplate(value) {
        return `<div class ="empty-box">
        <p class="empty-description">По вашему запросу ничего не найдено!</p>
        </div>`
    }

    static ticketsTemplate(ticket) {
        return `<div class="col s12 m6">
      <div class="card ticket-card">
        <div class="ticket-airline d-flex align-items-center">
          <img
            src="${ticket.airline_logo}"
            class="ticket-airline-img"
          />
          <span class="ticket-airline-name"
            >${ticket.airline_name}</span
          >
        </div>
        <div class="ticket-destination d-flex align-items-center">
          <div class="d-flex align-items-center mr-auto">
            <span class="ticket-city">${ticket.origin_name}</span>
            <i class="medium material-icons">flight_takeoff</i>
          </div>
          <div class="d-flex align-items-center">
            <i class="medium material-icons">flight_land</i>
            <span class="ticket-city">${ticket.destination_name}</span>
          </div>
        </div>
        <div class="ticket-time-price d-flex align-items-center">
          <span class="ticket-time-departure">${ticket.expires_at}</span>
          <span class="ticket-price ml-auto">${ticket.price}</span>
        </div>
        <div class="ticket-additional-info">
          <span class="ticket-transfers">Пересадок: ${ticket.transfers}</span>
          <span class="ticket-flight-number">Номер рейса: ${ticket.flight_number}</span>
        </div>
      </div>
    </div>`
    }
}

const tickets = new Tickets();

export default tickets;