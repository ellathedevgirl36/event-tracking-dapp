import crypto from 'node:crypto';

export class Ticket {
    id;
    event;
    owner;
    createdAt;

    constructor({ event, owner }) {
        this.id = crypto.randomUUID();
        this.event = event;
        this.owner = owner;
        this.createdAt = Date.now();
    }

    getData() {
        return {
            id: this.id,
            event: this.event,
            owner: this.owner,
            createdAt: this.createdAt,
        };
    }
}
