class TicketStorage {
    tickets;

    constructor() {
        this.tickets = new Map();
    }

    getAll() {
        return Array.from(this.tickets.values());
    }

    addOne(ticket) {
        this.tickets.set(ticket.id, ticket);
    }

    getOneById(id) {
        return this.tickets.get(id);
    }

    updateOne(ticket) {
        this.tickets.set(ticket.id, ticket);
    }
}

export const ticketStorage = new TicketStorage();
