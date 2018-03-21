import {List} from 'immutable';
import {constants} from '../../constants';

const initialState = List([]);

const movies = (state = initialState, action) => {
    switch (action.type) {
        case constants.movies.SET:
            return List(action.payload.movies);
        default:
            return state;
    }
};

export default movies;
