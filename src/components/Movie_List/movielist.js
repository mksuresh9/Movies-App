import React from "react";
import { useSelector } from "react-redux";
import { getallMovies, getallShows } from "../../feature/MovieSlice/movieSlice";
import MovieCard from "../Movie_Card/moviecard";
import "./movielist.scss"
// import { fetchAsyncmovies } from '../../feature/MovieSlice/movieSlice';

const MovieList = () => {
    const movies = useSelector(getallMovies);
    const shows = useSelector(getallShows);
    console.log(shows);
    let MoviesRender = '', ShowsRender = '';
    MoviesRender = movies.Response === "True" ? (
        movies.Search.map((item, index) => {
            return <MovieCard key={index} data={item}></MovieCard>
        })
    ) :
        <div className="movie-error">
            <h3>{movies.Error}</h3>
        </div>
        ;

    ShowsRender = shows.Response === "True" ? (
        shows.Search.map((item, index) => {
            return <MovieCard key={index} data={item}></MovieCard>
        })
    ) :
        <div className="movie-error">
            <h3>{shows.Error}</h3>
        </div>
        ;

    return (<div className="movie-wrapper">
        <div className="movie-list">
            <h2>Movies</h2>
            <hr></hr>
            <div className="movie-container">
                {MoviesRender}
            </div>

        </div>
        <div className="show-list">
            <h2>Shows</h2>
            <hr></hr>
            <div className="show-container">
                {ShowsRender}
            </div>

        </div>
    </div>)
}

export default MovieList;