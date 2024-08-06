class EventStorage {
    events;

    constructor() {
        this.events = new Map();
    }

    getAll() {
        return Array.from(this.events.values());
    }

    addOne(event) {
        this.events.set(event.id, event);
    }

    getOneById(id) {
        return this.events.get(id);
    }

    updateOne(event) {
        this.events.set(event.id, event);
    }
}

export const eventStorage = new EventStorage();
