import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { ticketsPath } from "@/paths";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LucideKanban } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ticket Bounty",
  description: "Ticket bounty app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <nav className="support-blackdrop-blur:bg-background/60 fixed left-0
        right-0 top-0 z-20 border-b bg-background/95 backdrop-blur w-full flex
        py-2.5 px-5 justify-between items-center
        ">
          <div>
            <Link href='/' className={buttonVariants({ variant: 'ghost' })}>
              <LucideKanban />
              <h1 className="font-semibold text-lg">TicketBounty</h1>
            </Link>
          </div>
          <div>
            <Link href={ticketsPath()} className={buttonVariants({ variant: 'outline' })}>
              Tickets
            </Link>
          </div>
        </nav>
        <main className="min-h-screen flex-1 overflow-y-auto overflow-x-hidden
        py-24 px-8 bg-secondary/20 flex flex-col
        ">
          {children}
        </main>
      </body>
    </html >
  );
}
