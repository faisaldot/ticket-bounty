import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Home Page</h1>
        <p className="text-sm text-muted-foreground mt-2">
          Your homepage to start
        </p>
      </div>

      <Separator />

      <div className="flex-1 flex flex-col items-center">
        <Link href="/tickets" className="underline">
          Tickets Page
        </Link>
      </div>
    </div>
  );
}
