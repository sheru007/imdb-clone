import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import {FiThumbsUp} from 'react-icons/fi'

type CardProps = {
    result: Record<string, any>
}

function Card({result}:  CardProps) {
  return (
    <div className='group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-sm rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200'>
        <Link href={`/movie/${result?.id}`}>
            <Image 
                src={`https://image.tmdb.org/t/p/original/${result?.backdrop_path || result?.poster_path}`} 
                alt='movie poster' 
                width={500} 
                height={300} 
                className='sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300'
            />
        </Link>
        <div className='p-2'>
            <p className='line-clamp-2 text-md'>{result?.overview || 'NA'}</p>
            <h2 className='text-lg font-bold truncate'>{result?.title || result?.name || 'NA'}</h2>
            <p className='flex items-center'>
                {result?.release_date || result?.first_air_date || 'NA'}
                <FiThumbsUp className='h-5 mr-1 ml-3' />
                {result?.vote_count}({result?.vote_average})
            </p>
        </div>

    </div>
  )
}

export default Card