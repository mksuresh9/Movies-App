import React, { useEffect, } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getshowormovie, fetchAsyncMovieorShow, RemoveMovieorShow } from "../../feature/MovieSlice/movieSlice";
import "./moviedetail.scss";
const MovieDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const data = useSelector(getshowormovie);

    useEffect(() => {
        dispatch(fetchAsyncMovieorShow(id))
        return () => {
            dispatch(RemoveMovieorShow());
        }
    }, [dispatch, id])

    return (
        <div className="sections">
            {Object.keys(data).length === 0 ? <div>...Loading</div> :
                <>
                    <div className="section-left">
                        <div className="movie-title">{data.Title}</div>
                        <div className="movie-rating">
                            <span>
                                IMDB Rating <i className="fa fa-star"></i> : {data.imdbRating}
                            </span>
                            <span>
                                IMDB Votes <i className="fa fa-thumbs-up"></i>  : {data.imdbVotes}
                            </span>
                            <span>
                                RunTime <i className="fa fa-film"></i>  : {data.Runtime}
                            </span>
                            <span>
                                Year <i className="fa fa-calendar"></i>  : {data.Year}
                            </span>

                        </div>
                        <div className="movie-plot">
                            {data.Plot}
                        </div>
                        <div className="movie-info">
                            <div>
                                <span>
                                    Director
                                </span>
                                <span>
                                    {data.Director}
                                </span>
                            </div>
                            <div>
                                <span>
                                    Stars
                                </span>
                                <span>
                                    {data.Actors}
                                </span>
                            </div>
                            <div>
                                <span>
                                    Genre
                                </span>
                                <span>
                                    {data.Genre}
                                </span>
                            </div>
                            <div>
                                <span>
                                    Language
                                </span>
                                <span>
                                    {data.Language}
                                </span>
                            </div>
                            <div>
                                <span>
                                    Awards
                                </span>
                                <span>
                                    {data.Awards}
                                </span>
                            </div>

                        </div>
                    </div>
                    <div className="section-right">
                        <img src={data.Poster} alt={data.Title}></img>
                    </div>
                </>
            }
        </div>

    )
}

export default MovieDetail;