import Link from "next/link";
import Placeholder from "@/components/placeholder";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Placeholder
      label="Ticket Not Found"
      button={
        <Link href="/tickets" className={buttonVariants({ variant: "link" })}>
          Go to tickets
        </Link>
      }
    />
  );
}
