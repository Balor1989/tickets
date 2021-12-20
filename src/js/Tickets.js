class Tickets {
    constructor() {
        this.container = document.querySelector('.card-list')
    }

    renderTickets(tickets) {
        this.clearContainer();
        if (tickets.length) {
            this.showEmptyMessage()
            return;
        }
    }

    clearContainer() {
        this.container.innerHTML = '';
    }

    showEmptyMessage() {
        const template = this.showEmptyMessage();
        this.container.insertAdjacentElement(template)

    }

    static emptyMessageTemplate(value) {
        return `<div class ="empty-box">
        <p class="empty-description">По вашему запросу ничего не найдено!</p>
        </div>`
    }

    static ticketsTemplate(ticket) {

    }
}

const tickets = new Tickets();

export default tickets;