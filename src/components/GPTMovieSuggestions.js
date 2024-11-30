import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GPTMovieSuggestions = () => {
  const {moviesResults,geminiResults}=useSelector(store=>store.gpt)
  

  if(!moviesResults || !geminiResults){
    return null
  }

  return (
    <div className='p-4 m-4 bg-black text-white opacity-90'>
      <div>
        {geminiResults.map((movieName,index)=>(
          <MovieList key={movieName} title={movieName} movies={moviesResults[index]} />

        ))}
      </div>
    </div>
  )
}

export default GPTMovieSuggestions