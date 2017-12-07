import { constants } from '../../constants';

export const createDeck = () => {
    return {
        type: constants.deck.CREATE,
        payload: {}
    }
};

export const setDeckId = (id) => {
    return {
        type: constants.deck.SET_ID,
        payload: {
            id
        }
    }
};

export const setDeckRemaining = (count) => {
    return {
        type: constants.deck.SET_REMAINING,
        payload: {
            count
        }
    }
};

