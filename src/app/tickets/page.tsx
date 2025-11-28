import Header from "@/components/header";

import { Separator } from "@/components/ui/separator";
import TicketItem from "@/features/ticket/component/ticket-item";
import type { Ticket } from "@/features/ticket/types";
import { initialData } from "../data";

export default function TicketsPage() {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Header
        title="Tickets Page"
        description="Your tickets page to start with"
      />
      <Separator />

      <div className="flex-1 flex flex-col items-center  animate-accordion-down">
        {initialData.map((ticket) => (
          <TicketItem key={ticket.id} ticket={ticket as Ticket} />
        ))}
      </div>
    </div>
  );
}
