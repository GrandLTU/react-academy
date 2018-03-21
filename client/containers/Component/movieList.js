import React from 'react';
import {getImageUrl} from "../../core/api";
import {withRouter} from "react-router-dom";

const MovieList = ({movies, history}) => {
    return (
        <div className="movie-list">
            <div className="row">
                {movies.map(movie => (
                    <div
                        onClick={() => history.push('/movie/' + movie.id)}
                        key={movie.id}
                        className="col-sm-2"
                    >
                        <div className="movie-list-item"
                             style={{backgroundImage: `url('${getImageUrl(movie)}')`}}>
                            <span className="movie-list-item__rating">{movie.vote_average}</span>
                            <span className="movie-list-item__name">{movie.title}</span>
                        </div>
                    </div>
                ))}
                {movies.size ? '' : (
                    <div className="genre-title">
                        No movies found
                    </div>
                )}
            </div>
        </div>
    )
};

export default withRouter(MovieList);
