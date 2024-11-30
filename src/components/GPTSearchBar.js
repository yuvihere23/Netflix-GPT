import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import languageConstants from '../utils/languageConstants';
import { genAI } from '../utils/gemini';
import { API_OPTIONS } from '../utils/contants';
import { addGPTMoviesResults, clearGPTMoviesResults } from '../utils/gptSlice';
import Loading from './Loading';
import GeminiAPIError from './GeminiAPIError'; // Import the error component

const GPTSearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [geminiError, setGeminiError] = useState(false); // New state for Gemini API errors
    const language = useSelector((store) => store.config);
    const searchText = useRef(null);
    const dispatch = useDispatch();

    const searchtmdbMovies = async (movie) => {
        try {
            const url = `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`;

            const data = await fetch(url, API_OPTIONS);
            if (!data.ok) {
                console.error(`Error: ${data.statusText}`);
                return [];
            }

            const json = await data.json();
            return json.results || [];
        } catch (error) {
            console.error("Fetch Error:", error);
            return [];
        }
    };

    const handleSearch = async () => {
        dispatch(clearGPTMoviesResults());
        if (!searchQuery.trim()) {
            setErrorMessage("Please enter something.");
            return;
        }

        setErrorMessage('');
        setGeminiError(false); 
        setIsLoading(true);
       

        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
        const query = `Act as a movie recommendation system and suggest me some movies based on my query as ${searchText.current.value}. Only give me 10 movies comma separated without mentioning years.`;

        try {
            const result = await model.generateContent(query);
            const geminiResponse = result.response.text().toString().split(', ');

            const PromiseArray = geminiResponse.map((movie) =>
                searchtmdbMovies(encodeURIComponent(movie.trim()))
            );

            const tmdbResults = await Promise.all(PromiseArray);

            dispatch(
                addGPTMoviesResults({ geminiResults: geminiResponse, moviesResults: tmdbResults })
            );
        } catch (error) {
            console.error('Error during Gemini or TMDB API call:', error);
            setGeminiError(true); 
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className=" pt-[45%] md:pt-[10%] flex flex-col items-center">
            <form onSubmit={(e) => e.preventDefault()} className=' w-full md:w-1/2 bg-black grid grid-cols-12'>
                <input
                    ref={searchText}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={languageConstants[language.lang].gptPlaceholder}
                    className="p-4 m-4 col-span-9 rounded-lg"
                />
                <button
                    onClick={handleSearch}
                    className="px-4 py-2 m-4 col-span-3 bg-red-700 text-white rounded-lg"
                >
                    {languageConstants[language.lang].search}
                </button>
            </form>

            {errorMessage && <p className="px-4 py-4 m-4 bg-black text-white ml-4 font-bold text-3xl mt-10 rounded-md">{errorMessage}</p>} 
            {isLoading && <Loading />} 
            {geminiError && <GeminiAPIError />}
        </div>
    );
};

export default GPTSearchBar;
