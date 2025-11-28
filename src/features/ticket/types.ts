export type TicketType = "OPEN" | "DONE" | "IN_PROGRESS";

export type Ticket = {
  id: string;
  title: string;
  content: string;
  status: TicketType;
};
