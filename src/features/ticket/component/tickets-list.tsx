import { getTickets } from "../queries/get-tickets";
import TicketItem from "./ticket-items";

export default async function TicketsList() {
  const tickets = await getTickets();

  return (
    <div className="flex-1 flex flex-col items-center ">
      {tickets.map((ticket) => (
        <TicketItem key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
}
