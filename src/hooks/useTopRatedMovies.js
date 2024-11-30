import { useDispatch,useSelector  } from "react-redux";
import { useEffect } from "react";
import { addtopratedmovies } from "../utils/movieslice";
import { TOPRATED_URL, API_OPTIONS } from "../utils/contants";


const useTopRatedMovies =()=>{
    const dispatch=useDispatch();
    const toprated=useSelector(store=>store.movies.toprated)

  const getTopRatedMovies=async()=>{
    const data =await fetch(TOPRATED_URL,API_OPTIONS)
    const response=await data.json();
    
    dispatch(addtopratedmovies(response.results)) 
  }
  useEffect(()=>{
    !toprated && getTopRatedMovies()
  },[])
}

export default useTopRatedMovies;
