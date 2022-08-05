import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APIKey } from "../../common/MovieApi/ApiKey";
import movieapi from "../../common/MovieApi/movieapi";

export const fetchAsyncmovies = createAsyncThunk(
    'movies/asyncthunkmovies',
    async() => {
        const movieText = "Harry";
        const response=await movieapi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`);
        return response.data;
    }
);

export const fetchAsyncShows = createAsyncThunk(
    "movies/fetchAsyncShows",
    async () => {
      const showsText = "friends";
      const response = await movieapi.get(
        `?apiKey=${APIKey}&s=${showsText}&type=series`
      );
      return response.data;
    }
  );

  export const fetchAsyncMovieorShow= createAsyncThunk(
    "movies/fetchAsyncMovieorShow",
    async (id)=>{
        const response= await movieapi.get(
            `?apiKey=${APIKey}&i=${id}&Plot=full`
        );
        return response.data;

    }
  )

const initialState = {
    movies: {},
    shows: {},
    showormovie: {}
}

const MovieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        RemoveMovieorShow: (state) => {
            state.showormovie = {};
        }
    },
    extraReducers: {
        [fetchAsyncmovies.pending]: () => {
            console.log('pending');
        },
        [fetchAsyncmovies.fulfilled]: (state, { payload }) => {
            return { ...state, movies: payload }
        },
        [fetchAsyncmovies.rejected]: () => {
            console.log("rejected!");
        },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            return { ...state, shows: payload }
        },
        [fetchAsyncMovieorShow.fulfilled]: (state, { payload }) => {
            return { ...state, showormovie: payload }
        },

    },

});
export const { RemoveMovieorShow } = MovieSlice.actions;
export const getallMovies = (state) => state.movies.movies;
export const getallShows = (state) => state.movies.shows;
export const getshowormovie= (state) => state.movies.showormovie;
export default MovieSlice.reducer;