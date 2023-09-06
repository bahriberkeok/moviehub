import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    genres: [],
    isFetching: false
}


const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {
        searchGenre: (state) =>{
                return {
                    ...state,
                    isFetching: true
                }
            },
        searchedGenre: (state, action) => {
            return {
                ...state,
                genres: action.payload.genres,
                isFetching: false
                
            }
        },
       resetGenre: () => {
           return {initialState}
       }
   } }
)

export const { searchGenre, searchedGenre, resetGenre} = genreSlice.actions
export default genreSlice.reducer
