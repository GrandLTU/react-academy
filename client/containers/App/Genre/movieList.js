import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import Preloader from '../preloader'
import {loadGenreMovies} from "../../../core/modules/genres/genresActions";
import MovieList from "../../Component/movieList";

class GenreMovieList extends React.Component {
    componentDidMount() {
        this.props.onLoadMovies(this.props.match.params.genre);
    }

    componentWillReceiveProps(props) {
        if (this.props.match.params.genre !== props.match.params.genre) {
            this.props.onLoadMovies(props.match.params.genre);
        }
    }

    render() {
        return (
            <Preloader name="genre-movies">
                <MovieList movies={this.props.movies}/>
            </Preloader>
        )
    }
}

const mapStateToProps = state => ({
    movies: state.movies
});

const mapDispatchToProps = dispatch => ({
    onLoadMovies: (genreName) => dispatch(loadGenreMovies(genreName)),
});


export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(GenreMovieList));


