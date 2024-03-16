import React from 'react'
import Results from '@/components/Results';
const API_KEY = process.env.API_KEY;

type SearchPageProps = {
    params: {
        searchTerm: string
    }
}

async function SearchPage({params}: SearchPageProps) {
  const SearchTerm = params.searchTerm;
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${SearchTerm}&language=en-US&page=1`)
  const data = await res.json()
  const results = data.results;


  return (
    <div>
      {
        results && results.length === 0 && (
          <h1 className='text-center pt-6'>No movie found for this name</h1>
        )
      }
      {
        results && <Results results={results} />
      }
    </div>
  )
}

export default SearchPage