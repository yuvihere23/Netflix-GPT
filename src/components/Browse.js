import React  from 'react'
import Header from './Header'
import MainConatiner from './MainConatiner'
import SecondaryContainer from './SecondaryContainer'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpComingMovies from '../hooks/useUpcomingMovies'
import { useSelector } from 'react-redux'
import GPTSearch from './GPTSearch'


const Browse = () => {

  const showGPTSearch=useSelector(store=>store.gpt.showGPTSearch)
 
  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpComingMovies()

  return (
    
    <div>
      <Header/>

      {showGPTSearch
      ?
      (
      <GPTSearch/>
    )
      :
      (
      <>
        <MainConatiner/>
        <SecondaryContainer/>
      </>
      )}
      
    </div>
  )
}

export default Browse