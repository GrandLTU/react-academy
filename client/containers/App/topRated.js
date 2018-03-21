import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import Preloader from './preloader'
import MovieList from "../Component/movieList";
import {loadTopRated} from "../../core/modules/movies/moviesActions";

class TopRated extends React.Component {
    componentDidMount() {
        this.props.onLoadMovies();
    }

    render() {
        return (
            <Preloader name="top-rated">
                <MovieList movies={this.props.movies}/>
            </Preloader>
        )
    }
}

const mapStateToProps = state => ({
    movies: state.movies
});

const mapDispatchToProps = dispatch => ({
    onLoadMovies: () => dispatch(loadTopRated()),
});


export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(TopRated));
