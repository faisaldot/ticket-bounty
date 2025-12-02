import Header from "@/components/header";
import { Separator } from "@/components/ui/separator";

export default function Loading() {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Header title="Ticket Page" description="All your tickets" />
      <Separator />

      <h1>Loading...</h1>
    </div>
  );
}
