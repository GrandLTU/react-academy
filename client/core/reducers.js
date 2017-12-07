import {combineReducers} from 'redux';
import cards from './modules/cards/cardsReducer';
import deck from "./modules/deck/deckReducer";
import score from "./modules/score/scoreReducer";

const rootReducer = combineReducers({
    cards,
    deck,
    score
});

export default rootReducer;

const store = {
    cards: [
        {
            image: 'https://deckofcardsapi.com/static/img/KH.png',
            value: '10'
        },
        {
            image: 'https://deckofcardsapi.com/static/img/8C.png',
            value: '8'
        },
    ],
    score: 18,
    ended: false
};
