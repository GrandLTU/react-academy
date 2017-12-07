import { takeEvery, call, all, put } from 'redux-saga/effects';
import { constants } from '../../../core/constants';
import { endpoint } from '../../api/endpoints';
import { request } from '../../api/requests';
import {setDeckId, setDeckRemaining} from "./deckActions";

function* onCreateCard() {
    const { response, error } = yield call(request, 'GET', endpoint.createDeck());

    if (error) {
        return;
    }

    const { data: { deck_id, remaining }} = response;

    yield put(setDeckId(deck_id));
    yield put(setDeckRemaining(remaining));
}

export default function* deckSaga() {
    yield all([
        takeEvery(constants.deck.CREATE, onCreateCard),
    ]);
}
