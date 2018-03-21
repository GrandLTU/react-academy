import {constants} from '../../constants';

const initialState = 'https://image.tmdb.org/t/p/original/AdYJMNhcXVeqjRenSHP88oaLCaC.jpg';

const background = (state = initialState, action) => {
    switch (action.type) {
        case constants.background.SET:
            return action.payload.url;
        default:
            return state;
    }
};

export default background;
