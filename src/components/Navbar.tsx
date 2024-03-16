import React, {Suspense} from 'react'
import NavbarItem from './NavbarItem'

function Navbar() {
  return (
    <div className='flex dark:bg-amber-600 bg-amber-100 p-4 justify-center gap-6'>
        <Suspense><NavbarItem title='Trending' param='fetchTrending' /></Suspense>
        <Suspense><NavbarItem title='Top Rated' param='fetchTopRated' /></Suspense>
    </div>
  )
}

export default Navbar