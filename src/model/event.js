import crypto from 'node:crypto';

export class Event {
    id;
    organizer;
    name;
    date;
    location;
    createdAt;
    tickets;

    constructor({ organizer, name, date, location }) {
        this.id = crypto.randomUUID();
        this.organizer = organizer;
        this.name = name;
        this.date = new Date(date).toISOString();
        this.location = location;
        this.createdAt = Date.now();
        this.tickets = new Map();
    }

    getData() {
        return {
            id: this.id,
            organizer: this.organizer,
            name: this.name,
            date: this.date,
            location: this.location,
            createdAt: this.createdAt,
        };
    }

    addTicket(ticket) {
        this.tickets.set(ticket.id, ticket);
    }
}
