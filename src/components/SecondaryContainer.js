import React from 'react'
import MovieList from './MovieList'
import {useSelector} from 'react-redux'

const SecondaryContainer = () => {
    const nowplaying=useSelector((store)=>store.movies?.nowplayingmovies)
    const popularmovies=useSelector((store)=>store.movies?.popularmovies)
    const topratedmovies=useSelector((store)=>store.movies?.toprated)
    const upcomingmovies=useSelector((store)=>store.movies?.upcoming)

    if(!nowplaying){
        return ;
    }
    if(!popularmovies){
        return ;
    }
    if(!topratedmovies){
        return ;
    }
    if(!upcomingmovies){
        return ;
    }
  return (
    <div className='bg-black '>
        <div className='mt-0 md:-mt-52 z-20 relative pl-4 md:pl-10 '>
        <MovieList title={"Now Playing Movies"} movies={nowplaying}/>
        <MovieList title={"Popular Movies"} movies={popularmovies}/>
        <MovieList title={"Top-Rated Movies"} movies={topratedmovies}/>
        <MovieList title={"Up-Coming Movies"} movies={upcomingmovies}/>

       
        </div>
    </div>
  )
}

export default SecondaryContainer