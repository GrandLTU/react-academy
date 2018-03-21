import {routerReducer as routing} from 'react-router-redux';
import {combineReducers} from 'redux';
import genres from './modules/genres/genresReducer';
import preloader from './modules/preloader/preloaderReducer';
import movies from "./modules/movies/moviesReducer";
import movie from "./modules/movie/movieReducer";
import background from "./modules/background/backgroundReducer";

const rootReducer = combineReducers({
    routing,
    genres,
    preloader,
    movies,
    movie,
    background,
});

export default rootReducer;
