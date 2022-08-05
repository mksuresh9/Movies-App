import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./MovieSlice/movieSlice";

export const store= configureStore({
    reducer:{
        movies: moviesReducer,
    }
    
})