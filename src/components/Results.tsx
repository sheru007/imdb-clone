import React from 'react'

type ResultsProps = {
    results: any
}

function Results({results}: ResultsProps) {
  return (
    <div>
        {
            results.map((movie: any) => {
                return (<div key={movie.id}>
                    <h2>{movie.original_title}</h2>
                </div>)
            })
        }
    </div>
  )
}

export default Results