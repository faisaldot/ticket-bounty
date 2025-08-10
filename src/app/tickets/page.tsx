import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { initialTickets } from "@/data";
import { ticketPath } from "@/paths";
import { LucideCircleCheckBig, LucideFileText, LucidePencil } from "lucide-react";
import Link from "next/link";

const TicketIcons = {
  OPEN: <LucideFileText />,
  IN_PROGRESS: <LucidePencil />,
  DONE: <LucideCircleCheckBig />
}

export default function TicketsPage() {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">TicketsPage</h2>
        <p className="text-sm text-muted-foreground">All your tickets at one places</p>
      </div>

      <Separator />

      <div className="flex-1 flex flex-col items-center gap-y-4">
        {initialTickets.map(ticket => (
          <Card key={ticket.id} className="w-full max-w-[420px]">
            <CardHeader>
              <CardTitle className="flex gap-x-2">
                <span>{TicketIcons[ticket.status]}</span>
                <span>{ticket.title}</span>
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="line-clamp-3 whitespace-break-spaces">{ticket.content + ticket.content + ticket.content + ticket.content + ticket.content + ticket.content + ticket.content + ticket.content + ticket.content}</p>
            </CardContent>

            <CardFooter>
              <Link href={ticketPath(ticket.id)} className="underline">view</Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
