import { constants } from '../../constants';

const initialState = null;

const score = (state = initialState, action) => {
    switch (action.type) {
        case constants.score.SET_SCORE:
            return action.payload.score;
        case constants.score.DELETE:
            return null;
        default:
            return state;
    }
};

export default score;
