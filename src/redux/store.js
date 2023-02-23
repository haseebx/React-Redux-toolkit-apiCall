import { configureStore } from "@reduxjs/toolkit";
import todoreducer from "./slices/todoslice"

export const store =configureStore({
    reducer:{
        todo:todoreducer
    }
})