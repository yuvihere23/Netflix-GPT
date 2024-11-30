import React from 'react'
import { IMG_CDN } from '../utils/contants'

const MovieCard = ({poster_path}) => {
  return (
    <div className='w-36 md:w-48 pr-4'>
        <img src={IMG_CDN+poster_path} 
        alt="Oops! Couldn't find the Movie Poster"/>
    </div>
  )
}

export default MovieCard