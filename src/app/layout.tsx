import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80">
          <ul className="flex gap-4 p-5">
            <li className="text-lg hover:underline">
              <Link href="/">Home</Link>
            </li>
            <li className="text-lg hover:underline">
              <Link href="/tickets">Tickets</Link>
            </li>
          </ul>
        </nav>
        <main
          className="min-h-screen flex-1 overflow-y-auto overflow-x-hidden
          flex flex-col bg-secondary/20 py-24 px-5"
        >
          {children}
        </main>
      </body>
    </html>
  );
}
