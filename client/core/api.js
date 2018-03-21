import fetch from "../util/fetch";

const apiCall = (path, queryParams = {}) => {
    queryParams.api_key = '7bd61d5db2476d1307ff393ff142924b';

    const query = Object
        .keys(queryParams)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(queryParams[key]))
        .join('&');

    return fetch('https://api.themoviedb.org/3' + path + '?' + query);
};

export const getGenres = () => apiCall('/genre/movie/list');
export const getGenreMovies = (genreId) => apiCall(`/genre/${genreId}/movies`);
export const getPopularMovies = () => apiCall('/movie/popular');
export const getTopRatedMovies = () => apiCall('/movie/top_rated');
export const getUpcomingMovies = () => apiCall('/movie/upcoming');
export const getMovie = (movieId) => apiCall(`/movie/${movieId}`);
export const searchMovies = (query) => apiCall('/search/movie', {query});
export const getImageUrl = (movie) => 'https://image.tmdb.org/t/p/w1280' + movie.backdrop_path;
export const getPosterUrl = (movie) => 'https://image.tmdb.org/t/p/w342' + movie.poster_path;

