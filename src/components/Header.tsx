import React from 'react'
import MenuItem from '@/components/MenuItem';
import {AiFillHome} from 'react-icons/ai'
import {BsFillInfoCircleFill} from 'react-icons/bs';
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';

function Header() {
  return (
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
        {/* left side */}
        <div className='flex gap-4'>
            <MenuItem title="home" address='/' Icon={AiFillHome} />
            <MenuItem title="about" address='/about' Icon={BsFillInfoCircleFill} />
        </div>

        {/* right side */}
        <div className='flex gap-4 items-center'>
          <DarkModeSwitch />
          <Link href="/" className='flex gap-1 items-center'>
            <span className='text-2xl font-bold bg-amber-400 py-1 px-2 rounded'>IMDB</span>
            <span className='text-xl hidden sm:inline'>Clone</span>
          </Link>
        </div>
    </div>
  )
}

export default Header