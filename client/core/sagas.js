import { all, fork } from 'redux-saga/effects';
import genresSaga from "./modules/genres/genresSaga";
import moviesSaga from "./modules/movies/moviesSaga";
import movieSaga from "./modules/movie/movieSaga";

export default function* rootSaga() {
  yield all([
      fork(genresSaga),
      fork(moviesSaga),
      fork(movieSaga),
  ]);
}
