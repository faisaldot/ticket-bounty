import { LucideKanban } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./theme-toggle";
import { buttonVariants } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 px-5 py-5 flex justify-between">
      <div>
        <Link href="/" className={buttonVariants({ variant: "default" })}>
          <LucideKanban />
          <h1 className="text-lg font-bold">TicketBounty</h1>
        </Link>
      </div>
      <div className="flex justify-between gap-x-5">
        <div>
          <Link className={buttonVariants({ variant: "link" })} href="/tickets">
            Tickets
          </Link>
        </div>
        <div>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
