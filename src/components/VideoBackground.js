import React from 'react'

import {useSelector } from 'react-redux'

import useTrailerVideo from '../hooks/useTrailerVideo';


const VideoBackground = ({movieId}) => {
   
    const trailerVideo= useSelector((store)=>store.movies?.trailerVideo);
   

   const data =useTrailerVideo(movieId);
  

   


  return (
    <div className='w-screen'>
        {trailerVideo ? (
      <iframe 
        className="w-screen aspect-video" 
        src={"https://www.youtube.com/embed/"+trailerVideo.key +"?autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      />
    ) : (
      <p className="text-center text-white">Loading trailer...</p>
    )}
       
    </div>
  )
}

export default VideoBackground