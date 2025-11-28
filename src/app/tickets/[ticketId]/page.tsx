import Link from "next/link";
import { initialData } from "@/app/data";
import Header from "@/components/header";
import Placeholder from "@/components/placeholder";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import TicketItem from "@/features/ticket/component/ticket-item";
import type { Ticket } from "@/features/ticket/types";

interface TicketPageProps {
  params: Promise<{ ticketId: string }>;
}

export default async function TicketPage({ params }: TicketPageProps) {
  const { ticketId } = await params;
  const ticket = initialData.find((ticket) => ticket.id === ticketId);

  if (!ticket)
    return (
      <Placeholder
        label="No ticket found!"
        button={
          <Link href="/tickets" className={buttonVariants({ variant: "link" })}>
            Go to tickets
          </Link>
        }
      />
    );

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
