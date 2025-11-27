import { initialData } from "@/app/data";

interface TicketPageProps {
  params: Promise<{ ticketId: string }>;
}

export default async function TicketPage({ params }: TicketPageProps) {
  const { ticketId } = await params;
  const ticket = initialData.find((ticket) => ticket.id === ticketId);

  if (!ticket) return <h1 className="text-xl">No ticket found!</h1>;

  return (
    <div>
      <h1>{ticket.title}</h1>
      <p>{ticket.content}</p>
    </div>
  );
}
