import { LucideKanban } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'
import { ticketsPath } from '@/paths'

export default function Header() {
  return (
    <nav className="support-blackdrop-blur:bg-background/60 fixed left-0
        right-0 top-0 z-20 border-b bg-background/95 backdrop-blur w-full flex
        py-2.5 px-5 justify-between items-center">
      <div>
        <Link href='/' className={buttonVariants({ variant: 'ghost' })}>
          <LucideKanban />
          <h1 className="font-semibold text-lg">TicketBounty</h1>
        </Link>
      </div>
      <div>
        <Link href={ticketsPath()} className={buttonVariants()}>
          Tickets
        </Link>
      </div>
    </nav>
  )
}
