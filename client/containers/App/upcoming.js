import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import Preloader from './preloader'
import MovieList from "../Component/movieList";
import {loadUpcoming} from "../../core/modules/movies/moviesActions";

class Upcoming extends React.Component {
    componentDidMount() {
        this.props.onLoadMovies();
    }

    render() {
        return (
            <Preloader name="upcoming">
                <MovieList movies={this.props.movies}/>
            </Preloader>
        )
    }
}

const mapStateToProps = state => ({
    movies: state.movies
});

const mapDispatchToProps = dispatch => ({
    onLoadMovies: () => dispatch(loadUpcoming()),
});


export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(Upcoming));
