import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainConatiner = () => {
    const movies=useSelector((store)=>store.movies?.nowplayingmovies)

    if(!movies){
        return ;
    }

    const mainMovie=movies[0];
    
    const {original_title,overview,id}=mainMovie;

  return (
    <div className='pt-[45%] bg-black md:pt-0'>
        <VideoTitle title={original_title} overview={overview}/> 
       <VideoBackground movieId={id} />
       
    </div>
  )
}

export default MainConatiner