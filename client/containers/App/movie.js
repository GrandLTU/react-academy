import React from 'react';
import { Rating } from './rating';
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import Preloader from '../Component/preloader'
import classNames from 'classnames';
import {loadMovie} from "../../core/modules/movie/movieActions";
import {getImageUrl} from "../../core/api";

class Movie extends React.Component {
    componentDidMount() {
        this.props.onLoadMovie(this.props.match.params.movieId);
    }

    render() {
        return (
            <Preloader name="movie">
                {!this.props.movie ? '' : (
                    <div className="row">
                        <div className="col-sm-8 col-sm-offset-2">
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="movie-list-item"
                                         style={{ backgroundImage: `url('${getImageUrl(this.props.movie)}')`}}>
                                        <span className="movie-list-item__rating">{this.props.movie.vote_average}</span>
                                    </div>
                                </div>

                                <div className="col-sm-8">
                                    <div className="release-date">
                                        Release date: <strong>{this.props.movie.release_date}</strong>
                                    </div>

                                    <div className="title">
                                        {this.props.movie.title}
                                    </div>

                                    <div className="description">
                                        {this.props.movie.overview}
                                    </div>

                                    <Rating score={this.props.movie.vote_average}/>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Preloader>
        )
    }
}

const mapStateToProps = state => ({movie: state.movie});

const mapDispatchToProps = dispatch => ({
    onLoadMovie: (movieId) => dispatch(loadMovie(movieId)),
});


export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(Movie));
