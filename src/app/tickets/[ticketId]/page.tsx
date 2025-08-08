import { initialTickets } from "@/data"

type TicketPageParams = {
  params: Promise<{
    ticketId: string
  }>
}



export default async function page({ params }: TicketPageParams) {
  const { ticketId } = await params
  const ticket = initialTickets.find(t => t.id === ticketId)
  if (!ticket) {
    return <div>No ticket found!</div>
  }
  return (
    <div>
      <h2 className="text-lg">{ticket.title}</h2>
      <p className="text-sm">{ticket.content}</p>
    </div>
  )
}
