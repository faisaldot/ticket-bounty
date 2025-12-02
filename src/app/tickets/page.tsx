import { Suspense } from "react";
import Header from "@/components/header";
import { Separator } from "@/components/ui/separator";
import TicketsList from "@/features/ticket/component/tickets-list";

export default async function TicketsPage() {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Header
        title="Tickets Page"
        description="Your tickets page to start with"
      />
      <Separator />

      <Suspense fallback="loading...">
        <TicketsList />
      </Suspense>
    </div>
  );
}
