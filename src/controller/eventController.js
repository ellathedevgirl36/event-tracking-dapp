import { Event } from '../models/event';
import { RollupStateHandler } from '../shared/rollup-state-handler';
import { eventStorage } from '../storage/eventStorage';

export class EventController {
    async createEvent(data) {
        if (!data.organizer || !data.name || !data.date || !data.location) {
            return await RollupStateHandler.handleReport({
                error: 'Organizer, name, date, and location must be provided.',
            });
        }

        return await RollupStateHandler.advanceWrapper(() => {
            const newEvent = new Event(data);
            eventStorage.addOne(newEvent);

            return {
                ok: true,
                message: 'Event created successfully!',
                data: newEvent.getData(),
            };
        });
    }

    async getAllEvents() {
        return await RollupStateHandler.inspectWrapper(() =>
            eventStorage.getAll()
        );
    }

    async getEventById(data) {
        const eventId = data[0];
        const storageRequest = eventStorage.getOneById(eventId);

        if (!storageRequest?.id) {
            return await RollupStateHandler.handleReport({
                error: `Event not found for id '${eventId}'.`,
            });
        }

        return await RollupStateHandler.inspectWrapper(() => ({
            data: storageRequest.getData(),
        }));
    }
}
