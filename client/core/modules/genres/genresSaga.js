import {all, put, takeLatest, select, take} from 'redux-saga/effects';
import {constants} from '../../../core/constants';
import {startPreloader, stopPreloader} from "../preloader/preloaderActions";
import {getGenreMovies, getGenres} from "../../api";
import {setGenres} from "./genresActions";
import {setMovies} from "../movies/moviesActions";
import filterMovies from "../../filterMovies";

function* onLoadGenres() {
    yield put(startPreloader('genres'));
    const {response, error} = yield getGenres();
    if (response) {
        yield put(setGenres(response.data.genres));
    }

    yield put(stopPreloader('genres'));
}

function* onLoadGenreMovies({payload: {genreName}}) {
    yield put(startPreloader('genre-movies'));
    const state = yield select();
    let genres;

    if (state.preloader.get('genres')) {
        const action = yield take(constants.genres.SET);
        genres = action.payload.genres;
    } else {
        genres = state.genres;
    }

    const genre = genres.find(genre => genre.name === genreName);

    if (!genre) {
        yield put(setMovies([]));;
    } else {
        const {response, error} = yield getGenreMovies(genre.id);

        if (response) {
            yield put(setMovies(filterMovies(response.data.results)));
        }
    }

    yield put(stopPreloader('genre-movies'));
}

export default function* genresSaga() {
    yield all([
        takeLatest(constants.genres.LOAD, onLoadGenres),
        takeLatest(constants.genres.LOAD_MOVIES, onLoadGenreMovies),
    ]);
}
