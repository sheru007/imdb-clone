import React from 'react'
import NavbarItem from './NavbarItem'

function Navbar() {
  return (
    <div className='flex dark:bg-amber-600 bg-amber-100 p-4 justify-center gap-6'>
        <NavbarItem title='Trending' param='fetchTrending' />
        <NavbarItem title='Top Rated' param='fetchTopRated' />
    </div>
  )
}

export default Navbar