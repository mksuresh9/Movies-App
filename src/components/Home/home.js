import React,{useEffect} from "react";
import MovieList from "../Movie_List/movielist";
import { useDispatch } from "react-redux";
import { fetchAsyncmovies, fetchAsyncShows } from '../../feature/MovieSlice/movieSlice';
const Home = () => {
    const dispatch= useDispatch();
useEffect(()=>{
    dispatch(fetchAsyncmovies());
    dispatch(fetchAsyncShows());
},[dispatch])
    return (<div>
        <div className="banner-img">
          <MovieList></MovieList>
        </div>
    </div>) 
}

export default Home;