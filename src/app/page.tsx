import Results from '@/components/Results';
import React from 'react'

const API_KEY = process.env.API_KEY;
//https://api.themoviedb.org/3/movie/11?api_key=${API_KEY}
//   adult: false,
//   backdrop_path: '/bQS43HSLZzMjZkcHJz4fGc7fNdz.jpg',
//   id: 792307,
//   title: 'Poor Things',
//   original_language: 'en',
//   original_title: 'Poor Things',
//   overview: 'Brought back to life by an unorthodox scientist, a young woman runs off with a debauched lawyer on a whirlwind adventure across the continents. Free from the prejudices of her times, she grows steadfast in her purpose to stand for equality and liberation.',
//   poster_path: '/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg',
//   media_type: 'movie',
//   genre_ids: [Array],
//   popularity: 1584.682,
//   release_date: '2023-12-07',
//   video: false,
//   vote_average: 7.904,
//   vote_count: 2214
// }

async function Home({searchParams}: any) {
  const genre = searchParams.genre || 'fetchTrending';

  const res = await fetch(`https://api.themoviedb.org/3/${genre === 'fetchTopRated' ? 'movie/top_rated' : 'trending/all/week'}?api_key=${API_KEY}&language=en-US&page=1`, { next: { revalidate: 10000 }})
  if(!res.ok){
    throw new Error('SomeThing went wrong!!!')
    return <div>No Data Available!!!</div>
  }

  const data = await res.json();
  const results = data.results;
  console.log({results})
  return (
    <div>
      <Results results={results}/>
    </div>
  )
}

export default Home