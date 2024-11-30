import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import {BG_IMAGE} from '../utils/contants'
import GPTMovieSuggestions from './GPTMovieSuggestions'

const GPTSearch = () => {
  return (
    <>
    <div
  className="fixed -z-10 w-full h-screen bg-cover bg-center md:bg-fixed"
  style={{ backgroundImage: `url(${BG_IMAGE})` }}
>
</div>
    <div className=''>
        
    <GPTSearchBar/>
    <GPTMovieSuggestions/>

    </div>
    </>
  )
}

export default GPTSearch