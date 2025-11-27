import clsx from "clsx";
import Link from "next/link";
import { initialData } from "../data";

export default function TicketsPage() {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Tickets Page</h1>
        <p className="text-sm text-muted-foreground mt-2">
          Your ticket page to start
        </p>
      </div>

      <div className="flex-1 flex flex-col items-center gap-y-4 animate-accordion-down">
        {initialData.map((ticket) => (
          <li
            key={ticket.id}
            className="list-none w-full max-w-[420px] border border-muted-foreground rounded p-4"
          >
            <h1 className="text-lg font-semibold truncate">{ticket.title}</h1>
            <p className="text-sm text-muted-foreground truncate">
              {ticket.content}
            </p>
            <Link className="underline" href={`/tickets/${ticket.id}`}>
              View
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
}
