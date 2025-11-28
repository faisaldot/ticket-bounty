import clsx from "clsx";
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Ticket } from "../types";

interface TicketItemProps {
  ticket: Ticket;
  isDetails?: boolean;
}

export default function TicketItem({ ticket, isDetails }: TicketItemProps) {
  return (
    <Card
      className={clsx("w-full  my-2", {
        "max-w-[420px]": !isDetails,
        "max-w-[580px]": isDetails,
      })}
    >
      <CardHeader>
        <CardTitle>{ticket.title}</CardTitle>
        <CardDescription
          className={clsx(" whitespace-break-spaces", {
            "line-clamp-3": !isDetails,
          })}
        >
          {ticket.content}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        {!isDetails && (
          <Link className="text-sm underline" href={`/tickets/${ticket.id}`}>
            View
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}
