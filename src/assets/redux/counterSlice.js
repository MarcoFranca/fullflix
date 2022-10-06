import {createSlice} from "@reduxjs/toolkit";

const initialState ={
    value: "Home",
    value2: {}
}

export const counterSlice = createSlice({
    name: 'page',
    initialState,
    reducers:{
        goToIndex: (state)=>{
            state.value = "Home"
        },
        goToDetail: (state)=>{
            state.value = "Detail"
        },
        getMovieDetails: (state, action)=>{
            state.value2 = action.payload
        }
    }
})

export const {goToIndex, goToDetail, getMovieDetails } = counterSlice.actions;

export default counterSlice.reducer;