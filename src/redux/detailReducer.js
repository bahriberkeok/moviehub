import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    recommandations: {
        results: [],
        hasMore: false,
        totalresults: 0,
        page: 0,
        totalpages: 0,
        isFetching: false
    }
}


const detailSlice = createSlice({
    name: 'detailSlice',
    initialState,
    reducers: {
        searchDetail: (state) =>{
                return {
                    ...state,
                    isFetching: true
                }
            },
        searchedDetail: (state, action) => {
            return {
                ...state,
                ...action.payload,
                recommandations: {
                    ...action.payload.recommandations,
                    results: action.payload.recommendations.results.slice(0, 10)
                },
                isFetching: false
                
            }
        },
       resetDetail: () => {
           return {initialState}
       }
   } }
)

export const { searchDetail, searchedDetail, resetDetail} = detailSlice.actions
export default detailSlice.reducer