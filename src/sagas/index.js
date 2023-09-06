import { delay, all, call, put, takeLatest, takeEvery } from "redux-saga/effects"
import { searchedProduct, searchProduct } from "../redux/searchReducer"
import { searchedGenre, searchGenre} from "../redux/genreReducer"
import { searchedMovie, searchMovie } from "../redux/movieReducer"
import { searchedDetail, searchDetail } from "../redux/detailReducer"
import { API_KEY } from "../config"
import ProductDatabase from "../lib/api"

const api = new ProductDatabase(API_KEY)

function* fetchMovies (action) {
    yield delay(500)

    yield put (
        searchedProduct(yield call(api.movieDatabase, action.payload))
    )
}

function* fetchGenres () {
    yield put (
        searchedGenre(yield call(api.getGenre))
    )
}

function* fetchPopular (action) {
    yield put (
        searchedMovie(yield call(api.getMovies, action.payload))
    )
}

function* fetchDetail (action) {
    yield put (
        searchedDetail(yield call(api.getDetail, action.payload))
    )
}

export default function* watcherSaga() {
    yield all ([
        yield takeEvery(searchDetail.type, fetchDetail),
        yield takeEvery(searchMovie.type, fetchPopular),
        yield takeEvery(searchGenre.type, fetchGenres),
        yield takeLatest(searchProduct.type, fetchMovies)
    ])
}