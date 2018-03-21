import {constants} from '../../constants';

export const setGenres = genres => {
    return {
        type: constants.genres.SET,
        payload: {
            genres
        }
    }
};

export const loadGenres = () => {
    return {
        type: constants.genres.LOAD,
        payload: {}
    }
};

export const loadGenreMovies = (genreName) => {
    return {
        type: constants.genres.LOAD_MOVIES,
        payload: {
            genreName
        }
    }
};
