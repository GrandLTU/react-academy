import {constants} from '../../constants';

export const setMovies = movies => {
    return {
        type: constants.movies.SET,
        payload: {
            movies
        }
    }
};

export const loadPopular = () => {
    return {
        type: constants.movies.LOAD_POPULAR,
        payload: {}
    }
};

export const loadTopRated = () => {
    return {
        type: constants.movies.LOAD_TOP_RATED,
        payload: {}
    }
};

export const loadUpcoming = () => {
    return {
        type: constants.movies.LOAD_UPCOMING,
        payload: {}
    }
};
