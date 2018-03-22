import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import Preloader from '../Component/preloader'
import MovieList from "../Component/movieList";
import {loadPopular} from "../../core/modules/movies/moviesActions";

class MostPopular extends React.Component {
    componentDidMount() {
        this.props.onLoadMovies();
    }

    render() {
        return (
            <Preloader name="most-popular">
                <MovieList movies={this.props.movies}/>
            </Preloader>
        )
    }
}

const mapStateToProps = state => ({
    movies: state.movies
});

const mapDispatchToProps = dispatch => ({
    onLoadMovies: () => dispatch(loadPopular()),
});


export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(MostPopular));


