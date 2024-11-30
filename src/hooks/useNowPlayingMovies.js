import { useDispatch,useSelector  } from "react-redux";
import { useEffect } from "react";
import { addnowplayingmovies } from "../utils/movieslice";
import { NOW_PLAYING_URL, API_OPTIONS } from "../utils/contants";


const useNowPlayingMovies =()=>{
    const dispatch=useDispatch();

    const nowplayingmovies=useSelector(store=>store.movies.nowplayingmovies)
   

  const getNowPlayingMovies=async()=>{
    const data =await fetch(NOW_PLAYING_URL,API_OPTIONS)
   
    const response=await data.json();
    
    dispatch(addnowplayingmovies(response.results)) 
  }
  useEffect(()=>{
    !nowplayingmovies && getNowPlayingMovies()
  },[])
}

export default useNowPlayingMovies;
