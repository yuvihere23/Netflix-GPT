import { useDispatch,useSelector  } from "react-redux";
import { useEffect } from "react";
import { addupcomingmovies } from "../utils/movieslice";
import { UPCOMING_URL, API_OPTIONS } from "../utils/contants";


const useUpComingMovies =()=>{
    const dispatch=useDispatch();
    const upcoming=useSelector(store=>store.movies.upcoming)

  const getuseUpComingMovies=async()=>{
    const data =await fetch(UPCOMING_URL,API_OPTIONS)
    const response=await data.json();
    
    dispatch(addupcomingmovies(response.results)) 
  }
  useEffect(()=>{
    !upcoming && getuseUpComingMovies()
  },[])
}

export default useUpComingMovies;
