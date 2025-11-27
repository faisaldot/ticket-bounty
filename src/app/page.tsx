import Link from "next/link";
import Header from "@/components/header";
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Header title="Home Page" description="Your homepage to start with" />

      <Separator />

      <div className="flex-1 flex flex-col items-center">
        <Link href="/tickets" className="underline">
          Tickets Page
        </Link>
      </div>
    </div>
  );
}
