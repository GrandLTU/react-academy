import {constants} from "../../constants";

export const setBackground = (url) => {
    return {
        type: constants.background.SET,
        payload: {url}
    }
};
