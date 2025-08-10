import { LucideMessageSquareWarning } from 'lucide-react';
import React from 'react'

type PlaceholderProps = {
  label: string;
  icon?: React.ReactNode
  button?: React.ReactNode
}

export default function Placeholder({
  label,
  icon = <LucideMessageSquareWarning className='w-16 h-16' />,
  button = <div />
}: PlaceholderProps) {
  return (
    <div className='flex flex-col self-center flex-1 justify-center items-center'>
      {icon}
      <h2 className='text-lg text-center'>{label}</h2>
      {button && <div className='h-10'>{button}</div>}
    </div>

  )
}
