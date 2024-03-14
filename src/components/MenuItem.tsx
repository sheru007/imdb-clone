import React from 'react'
import Link from 'next/link'
import { IconType } from 'react-icons'

type MenuItemProps = {
  title: string
  address: string
  Icon: IconType
}


function MenuItem({ title, address, Icon}: MenuItemProps) {
  return (
    <Link href={address} className='flex justify-center align-middle gap-1 hover:text-amber-500'>
        <Icon className="text-2xl sm:hidden" />
        <p className='text-sm uppercase hidden sm:inline'>{title}</p>
    </Link>
  )
}

export default MenuItem