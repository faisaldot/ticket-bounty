import { initialTickets } from "@/data";
import { ticketPath } from "@/paths";
import Link from "next/link";

const TicketIcons = {
  OPEN: 'O',
  IN_PROGRESS: '>',
  DONE: 'X'
}

export default function TicketsPage() {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">TicketsPage</h2>
        <p className="text-sm text-muted-foreground">All your tickets at one places</p>
      </div>

      <div className="flex-1 flex flex-col items-center gap-y-4">
        {initialTickets.map(ticket => (
          <div key={ticket.id} className="w-full max-w-[420px] p-4 border border-slate-100 rounded">
            <div>{TicketIcons[ticket.status]}</div>
            <h2 className="text-lg">{ticket.title}</h2>
            <p className="text-sm">{ticket.content}</p>
            <Link href={ticketPath(ticket.id)} className="underline">view</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
