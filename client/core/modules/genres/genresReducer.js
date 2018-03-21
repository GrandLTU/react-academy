import {List} from 'immutable';
import {constants} from '../../constants';

const initialState = List([]);

const genres = (state = initialState, action) => {
    switch (action.type) {
        case constants.genres.SET:
            return List(action.payload.genres);
        default:
            return state;
    }
};

export default genres;
