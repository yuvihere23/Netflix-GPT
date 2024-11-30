import { useDispatch,useSelector  } from "react-redux";
import { useEffect } from "react";
import { addpopularmovies } from "../utils/movieslice";
import { POPULAR_URL, API_OPTIONS } from "../utils/contants";


const usePopularMovies =()=>{
    const dispatch=useDispatch();
    const popularmovies=useSelector(store=>store.movies.popularmovies)  

  const getPopularMovies=async()=>{
    const data =await fetch(POPULAR_URL,API_OPTIONS)
    const response=await data.json();
    
    dispatch(addpopularmovies(response.results)) 
  }
  useEffect(()=>{
    !popularmovies && getPopularMovies()
  },[])
}

export default usePopularMovies;
