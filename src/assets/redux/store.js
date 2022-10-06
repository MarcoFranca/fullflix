import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import pageReducer from "./counterSlice"

const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false
})


export const store = configureStore({
    reducer:{
        page: pageReducer,
    },
    middleware: customizedMiddleware
})