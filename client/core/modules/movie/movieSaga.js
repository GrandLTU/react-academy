import {all, put, takeLatest} from "redux-saga/effects";
import {startPreloader, stopPreloader} from "../preloader/preloaderActions";
import {getImageUrl, getMovie, getPosterUrl} from "../../api";
import {setMovie} from "./movieActions";
import {constants} from "../../constants";
import {setBackground} from "../background/backgroundActions";


function* onLoadMovie({payload: {movieId}}) {
    yield put(startPreloader('movie'));
    const {response, error} = yield getMovie(movieId);

    if (response) {
        yield put(setMovie(response.data));
        yield put(setBackground(getPosterUrl(response.data)));
    }

    yield put(stopPreloader('movie'));
}

export default function* movieSaga() {
    yield all([
        takeLatest(constants.movie.LOAD, onLoadMovie),
    ]);
}
