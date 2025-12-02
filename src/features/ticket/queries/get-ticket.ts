import { initialData } from "@/app/data";
import type { Ticket } from "../types";

export const getTicket = async (ticketId: string): Promise<Ticket | null> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const ticket = initialData.find((t) => t.id === ticketId);

  return new Promise((resolve) => resolve(ticket as Ticket));
};
