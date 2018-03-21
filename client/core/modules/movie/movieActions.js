import {constants} from '../../constants';



export const loadMovie = (movieId) => {
    return {
        type: constants.movie.LOAD,
        payload: {movieId}
    }
};

export const setMovie = (movie) => {
    return {
        type: constants.movie.SET,
        payload: {movie}
    }
};
