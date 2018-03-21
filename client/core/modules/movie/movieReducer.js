import {constants} from '../../constants';

const initialState = null;

const movie = (state = initialState, action) => {
    switch (action.type) {
        case constants.movie.SET:
            return action.payload.movie;
        default:
            return state;
    }
};

export default movie;
