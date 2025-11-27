import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LucideKanban } from "lucide-react";
import Link from "next/link";
import { ThemeProvider } from "next-themes";
import { ModeToggle } from "@/components/theme-toggle";
import { buttonVariants } from "@/components/ui/button";

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
  description: "Ticket Bounty Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 px-5 py-5 flex justify-between">
            <div>
              <Link href="/" className={buttonVariants({ variant: "default" })}>
                <LucideKanban />
                <h1 className="text-lg font-bold">TicketBounty</h1>
              </Link>
            </div>
            <div className="flex justify-between gap-x-5">
              <div>
                <Link
                  className={buttonVariants({ variant: "link" })}
                  href="/tickets"
                >
                  Tickets
                </Link>
              </div>
              <div>
                <ModeToggle />
              </div>
            </div>
          </nav>
          <main
            className="min-h-screen flex-1 overflow-y-auto overflow-x-hidden
          flex flex-col bg-secondary/20 py-24 px-5"
          >
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
