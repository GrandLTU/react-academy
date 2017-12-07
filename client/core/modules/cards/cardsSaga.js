import {all, call, put, takeEvery} from 'redux-saga/effects';
import {constants} from '../../../core/constants';
import {addCard} from './cardsActions';
import {endpoint} from '../../api/endpoints';
import {request} from '../../api/requests';
import {getCardNumberValue} from '../../helpers/cardValueParser';
import {setDeckRemaining} from "../deck/deckActions";

function* onRequestCard(action) {
    const {response, error} = yield call(request, 'GET', endpoint.draw(action.payload.deckId));

    if (response) {
        const {data} = response;

        yield* data.cards.map(card => {
            const {image, value} = card;

            return put(addCard({
                image,
                value: getCardNumberValue(value)
            }));
        });

        yield put(setDeckRemaining(data.remaining));
    }
}

export default function* cardSaga() {
    yield all([
        takeEvery(constants.cards.REQUEST, onRequestCard),
    ]);
}
