import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    results: [],
    totalresults: 0,
    page: 0,
    totalpages: 0,
    isFetching: false
}


const searchSlice = createSlice({
    name: 'searchSlice',
    initialState,
    reducers: {
        searchProduct: (state) =>{
                return {
                    ...state,
                    isFetching: true
                }
            },
        searchedProduct: (state, action) => {
            return {
                ...state,
                isFetching: false,
                results: action.payload.results,
                totalresults: action.payload.total_results,
                page: action.payload.page,
                totalpages: action.payload.total_pages
            }
        },
       resetList: () => {
           return {initialState}
       }
   } }
)

export const { searchProduct, searchedProduct, resetList} = searchSlice.actions
export default searchSlice.reducer
