'use client'
import React, {useState} from 'react'
import {useRouter} from 'next/navigation'

function Searchbox() {
    const [search, setSearch] = useState('')
    const router = useRouter()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>):void => {
        e.preventDefault();
        router.push(`/search/${search}`);
    }

    return (
        <form className='flex justify-between px-5 max-w-6xl mx-auto' onSubmit={handleSubmit}>
            <input 
                type='text' 
                placeholder='search movie...' 
                className='w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1' 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button className='text-amber-500 disabled:text-gray-100' disabled={search === ''}>Search</button>
        </form>
    )
}

export default Searchbox