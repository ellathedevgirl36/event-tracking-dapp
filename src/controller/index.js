import { EventController } from './eventController';
import { TicketController } from './ticketController';

const eventController = new EventController();
const ticketController = new TicketController();

export const controller = {
    createEvent: eventController.createEvent,
    getAllEvents: eventController.getAllEvents,
    getEventById: eventController.getEventById,
    createTicket: ticketController.createTicket,
    getTicketById: ticketController.getTicketById,
    verifyTicket: ticketController.verifyTicket,
};
