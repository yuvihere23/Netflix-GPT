import { createSlice } from "@reduxjs/toolkit";
const movieSlice= createSlice({
    name:"movies",
    initialState:{
        nowplayingmovies:null,
        popularmovies:null,
        toprated:null,
        upcoming:null,
        trailerVideo:null,
    },
    reducers:{
        addnowplayingmovies:(state,action)=>{

            state.nowplayingmovies=action.payload;
        },
        addpopularmovies:(state,action)=>{

            state.popularmovies=action.payload;
        },
        addtopratedmovies:(state,action)=>{

            state.toprated=action.payload;
        },
        addupcomingmovies:(state,action)=>{

            state.upcoming=action.payload;
        },
        addTrailerVideo:(state,action)=>{

            state.trailerVideo=action.payload;
        }
    }
})

export const{addnowplayingmovies,addTrailerVideo,addpopularmovies,addtopratedmovies,addupcomingmovies}=movieSlice.actions
export default movieSlice.reducer