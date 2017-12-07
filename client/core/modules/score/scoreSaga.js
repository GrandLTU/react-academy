import {all, select, takeEvery, put} from 'redux-saga/effects';
import {constants} from '../../../core/constants';
import {setScore} from "./scoreActions";

function* onUpdateScore(action) {
    const { score } = yield select();
    const { value } = action.payload.card;

    yield put(setScore(score + value));
}

export default function* scoreSaga() {
    yield all([
        takeEvery(constants.cards.ADD, onUpdateScore),
    ]);
}
