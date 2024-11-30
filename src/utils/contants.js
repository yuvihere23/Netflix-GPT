export const LOGO="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const BG_IMAGE="https://assets.nflxext.com/ffe/siteui/vlv3/03ad76d1-e184-4d99-ae7d-708672fa1ac2/web/IN-en-20241111-TRIFECTA-perspective_149877ab-fcbd-4e4f-a885-8d6174a1ee81_large.jpg"

export const TMDB_API_KEY=process.env.REACT_APP_TMDB_KEY
export const GEMINI_API_KEY=process.env.REACT_APP_GEMINI_KEY

export const ACCESS_TOKEN="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwM2QxZjNlZTQ0OTFjM2M2Mjc5OGRmYzQyZDMzMmVkZCIsIm5iZiI6MTczMTg0Mzg4My42MzExNDY3LCJzdWIiOiI2NzM5ZDYyNjExOTkxN2JjMWY1ZTkxZTIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NlF6VZ6gyUHT2aIoZsEJVYCW_SQTYI3CC44mOWmQuG0"

export const NOW_PLAYING_URL = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
export const POPULAR_URL = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
export const TOPRATED_URL = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
export const UPCOMING_URL = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer '+ process.env.REACT_APP_TMDB_ACCESS_TOKEN,
  }
};

export const IMG_CDN="https://image.tmdb.org/t/p/w500"

export const SUPPORTED_LANGUAGES = [
  {identifier:"en", name:"English"},
  {identifier:"es", name:"Española"},
  {identifier:"hindi", name:"हिंदी"}
]