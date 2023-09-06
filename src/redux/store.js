import { configureStore } from "@reduxjs/toolkit"
import searchReducer from "./searchReducer"
import genreReducer from "./genreReducer"
import movieReducer from "./movieReducer"
import detailReducer from "./detailReducer"
import watcherSaga from "../sagas/"
import createSagaMiddleware from "@redux-saga/core"

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        search: searchReducer,
        genres: genreReducer,
        movies: movieReducer,
        details: detailReducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({think: false}).prepend(sagaMiddleware)
    }
})

sagaMiddleware.run(watcherSaga)

export default store