import { Ticket } from "../models/ticket";
import { RollupStateHandler } from "../shared/rollup-state-handler";
import { eventStorage } from "../storage/eventStorage";
import { ticketStorage } from "../storage/ticketStorage";

export class TicketController {
  async createTicket(data) {
    if (!data.event || !data.owner) {
      return await RollupStateHandler.handleReport({
        error: "Event id and owner must be provided.",
      });
    }

    const event = eventStorage.getOneById(data.event);

    if (!event.id) {
      return await RollupStateHandler.handleReport({
        error: `Event not found for id '${data.event}'`,
      });
    }

    return await RollupStateHandler.advanceWrapper(() => {
      const newTicket = new Ticket(data);
      event.addTicket(newTicket);
      ticketStorage.addOne(newTicket);

      return {
        ok: true,
        message: "Ticket created successfully!",
        data: newTicket.getData(),
      };
    });
  }

  async getTicketById(data) {
    const ticketId = data[0];
    const storageRequest = ticketStorage.getOneById(ticketId);

    if (!storageRequest?.id) {
      return await RollupStateHandler.handleReport({
        error: `Ticket not found for id '${ticketId}'.`,
      });
    }

    return await RollupStateHandler.inspectWrapper(() => ({
      data: storageRequest.getData(),
    }));
  }

  async verifyTicket(data) {
    const ticketId = data[0];
    const ticket = ticketStorage.getOneById(ticketId);

    if (!ticket?.id) {
      return await RollupStateHandler.handleReport({
        error: `Ticket not found for id '${ticketId}'.`,
      });
    }

    return await RollupStateHandler.inspectWrapper(() => ({
      ok: true,
      message: "Ticket is valid.",
      data: ticket.getData(),
    }));
  }
}
