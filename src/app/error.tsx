'use client'
import React from 'react'

type ErrorProps = {
    error: Error
    reset: () => void
}

function Error({error, reset}: ErrorProps) {
  return (
    <div className='p-3'>
        <h2>{error.message}</h2>
        <button className='text-xl text-gray-300 py-2 px-3 rounded bg-blue-600 my-3' onClick={() => reset()}>Try Again</button>
    </div>
  )
}

export default Error