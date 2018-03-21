import {Map} from 'immutable';
import {constants} from '../../constants';

const initialState = Map({});

const preloader = (state = initialState, action) => {
    switch (action.type) {
        case constants.preloader.START:
            return state.set(action.payload.name, true);
        case constants.preloader.STOP:
            return state.set(action.payload.name, false);
        default:
            return state;
    }
};

export default preloader;
