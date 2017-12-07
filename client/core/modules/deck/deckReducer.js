import { Map } from 'immutable';
import { constants } from '../../constants';

const initialState = Map({deckId: null, remaining: 0});

const deck = (state = initialState, action) => {
    switch (action.type) {
        case constants.deck.SET_ID:
            return state.set('deckId', action.payload.id);
        case constants.deck.SET_REMAINING:
            return state.set('remaining', action.payload.count);
        default:
            return state;
    }
};

export default deck;
