import { createSlice } from "@reduxjs/toolkit";

const GPTSlice=createSlice({
    name: "GPT",
    initialState: {
        showGPTSearch: false,
        moviesResults: null,
        geminiResults: null,
        
    },
    reducers: {
        toggleGPTsearchView: (state, action) => {
            state.showGPTSearch = !state.showGPTSearch;
        },
        addGPTMoviesResults: (state, action) => {
            const {geminiResults,moviesResults}=action.payload;
            state.moviesResults = moviesResults;
            state.geminiResults = geminiResults;
        },
        clearGPTMoviesResults: (state) => {
            state.moviesResults = null;
            state.geminiResults = null;
        },

        
    },
});

export const { toggleGPTsearchView,addGPTMoviesResults,clearGPTMoviesResults } = GPTSlice.actions;
export default GPTSlice.reducer;