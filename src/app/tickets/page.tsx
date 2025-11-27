import Link from "next/link";
import Header from "@/components/header";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
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
          <Card key={ticket.id} className="w-full max-w-[420px] my-2">
            <CardHeader>
              <CardTitle>{ticket.title}</CardTitle>
              <CardDescription className="line-clamp-3 whitespace-break-spaces">
                {ticket.content}
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Link
                className="text-sm underline"
                href={`/tickets/${ticket.id}`}
              >
                View
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
