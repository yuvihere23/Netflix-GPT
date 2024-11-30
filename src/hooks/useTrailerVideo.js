
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addTrailerVideo } from '../utils/movieslice';
import { API_OPTIONS } from '../utils/contants';

const useTrailerVideo = (movieId) => {
    const dispatch=useDispatch();
    const trailerVideo=useSelector(store=>store.movies.trailerVideo);

    const getMovieVideo=async()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US',API_OPTIONS);
        const json=await data.json();
        

        const filterData=json.results.filter((video)=>video.type==='Trailer');
        const mainTrailer=filterData.length ?filterData[0]:json.results[0];
      
        dispatch(addTrailerVideo(mainTrailer));

    }

    useEffect(()=>{
       !trailerVideo &&  getMovieVideo();
    },[])
}

export default useTrailerVideo