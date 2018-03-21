import {constants} from '../../constants';

export const startPreloader = name => {
    return {
        type: constants.preloader.START,
        payload: {
            name
        }
    }
};

export const stopPreloader = name => {
    return {
        type: constants.preloader.STOP,
        payload: {
            name
        }
    }
};
