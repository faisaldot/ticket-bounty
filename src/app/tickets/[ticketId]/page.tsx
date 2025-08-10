import Placeholder from "@/components/placeholder"
import { Button } from "@/components/ui/button"
import { initialTickets } from "@/data"
import Link from "next/link"

type TicketPageParams = {
  params: Promise<{
    ticketId: string
  }>
}



export default async function page({ params }: TicketPageParams) {
  const { ticketId } = await params
  const ticket = initialTickets.find(t => t.id === ticketId)
  if (!ticket) {
    return (
      <div className="flex flex-1">
        <Placeholder label="Ticket not found!"
          button={
            <Button variant='outline'>
              <Link href='/' >Go back to home</Link>
            </Button>
          }
        />
      </div>
    )
  }
  return (
    <div>
      <h2 className="text-lg">{ticket.title}</h2>
      <p className="text-sm">{ticket.content}</p>
    </div>
  )
}
