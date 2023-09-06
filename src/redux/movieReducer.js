import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    results: [],
    hasMore: false,
    totalresults: 0,
    page: 0,
    totalpages: 0,
    isFetching: false
}


const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        searchMovie: (state) =>{
                return {
                    ...state,
                    isFetching: true
                }
            },
        searchedMovie: (state, action) => {
            return {
                ...state,
                results: [...state.results, ...action.payload.results],
                hasMore: action.payload.page < action.payload.total_pages,
                totalresults: action.payload.total_results,
                page: action.payload.page,
                totalPages: action.payload.total_pages,
                isFetching: false,
            }
        },
       resetMovie: () => {
           return {initialState}
       }
   } }
)

export const { searchMovie, searchedMovie, resetMovie} = movieSlice.actions
export default movieSlice.reducer
