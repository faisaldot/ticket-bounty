import { notFound } from "next/navigation";
import Header from "@/components/header";
import { Separator } from "@/components/ui/separator";
import TicketItem from "@/features/ticket/component/ticket-items";
import { getTicket } from "@/features/ticket/queries/get-ticket";
import type { Ticket } from "@/features/ticket/types";

interface TicketPageProps {
  params: Promise<{ ticketId: string }>;
}

export default async function TicketPage({ params }: TicketPageProps) {
  const { ticketId } = await params;
  const ticket = await getTicket(ticketId);

  if (!ticket) notFound();

  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Header title="Ticket Page" description="All your tickets" />
      <Separator />

      <div className="flex-1 flex flex-col items-center ">
        <TicketItem ticket={ticket as Ticket} isDetails />
      </div>
    </div>
  );
}
