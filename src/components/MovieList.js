import React, { useRef } from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  

 
  const scrollContainerRef = useRef(null);

  
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200; 
      scrollContainerRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const filteredMovies = movies.filter(movie => movie.poster_path !== null);

  return ( 
    filteredMovies &&
    <div className="relative px-6">
      <h1 className=' text-xl md:text-3xl py-4 text-white'>{title}</h1>
      <div className="flex items-center">
        
        <button
          onClick={() => scroll('left')}
          className="w-10 absolute left-0 z-10 bg-black bg-opacity-90 text-white p-2 rounded-lg"
        >
          &#8592;
        </button>

        
        <div
          className="flex overflow-x-scroll scrollbar-hide"
          ref={scrollContainerRef}
          style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
        >
          <div className="flex">
          {filteredMovies.map((movie) => (
              <MovieCard key={movie.id} poster_path={movie.poster_path} />
            ))}
          </div>
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={() => scroll('right')}
          className="w-10 absolute right-0 z-10 bg-black bg-opacity-90 text-white p-2 mr-2 rounded-lg"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default MovieList;
