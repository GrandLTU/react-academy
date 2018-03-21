import {all, put, takeLatest} from "redux-saga/effects";
import {startPreloader, stopPreloader} from "../preloader/preloaderActions";
import {getMovie, getPopularMovies, getTopRatedMovies, getUpcomingMovies} from "../../api";
import {setMovies} from "./moviesActions";
import {constants} from "../../constants";
import filterMovies from "../../filterMovies";

function* onLoadPopular() {
    yield put(startPreloader('most-popular'));
    const {response, error} = yield getPopularMovies();

    if (response) {
        yield put(setMovies(filterMovies(response.data.results)));
    }

    yield put(stopPreloader('most-popular'));
}

function* onLoadTopRated() {
    yield put(startPreloader('top-rated'));
    const {response, error} = yield getTopRatedMovies();

    if (response) {
        yield put(setMovies(filterMovies(response.data.results)));
    }

    yield put(stopPreloader('top-rated'));
}

function* onLoadUpcoming() {
    yield put(startPreloader('upcoming'));
    const {response, error} = yield getUpcomingMovies();

    if (response) {
        yield put(setMovies(filterMovies(response.data.results)));
    }

    yield put(stopPreloader('upcoming'));
}

export default function* moviesSaga() {
    yield all([
        takeLatest(constants.movies.LOAD_POPULAR, onLoadPopular),
        takeLatest(constants.movies.LOAD_TOP_RATED, onLoadTopRated),
        takeLatest(constants.movies.LOAD_UPCOMING, onLoadUpcoming),
    ]);
}
