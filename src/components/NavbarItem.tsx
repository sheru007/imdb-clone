'use client'
import Link from 'next/link'
import React from 'react'
import { useSearchParams} from 'next/navigation'

type NavbarItemProps = {
    title: string
    param: string
}

function NavbarItem({title, param}: NavbarItemProps) {
    const searchParams = useSearchParams()
    const genre = searchParams.get('genre');

  return (
    <div className={`hover:text-amber-300 font-semibold ${genre === param ? 'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg' : ''}`}>
        <Link href={`/?genre=${param}`}>{title}</Link>
    </div>
  )
}

export default NavbarItem