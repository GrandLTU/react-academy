import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import Preloader from '../Component/preloader'
import MovieList from "../Component/movieList";
import {loadSearch, loadTopRated} from "../../core/modules/movies/moviesActions";
import parseQuery from "../../core/parseQuery";

class Search extends React.Component {
    componentDidMount() {
        const {query} = parseQuery(this.props.location.search) || {query: ''};

        this.props.onLoadMovies(query);
    }

    componentWillReceiveProps(props) {
        const {query: oldQuery} = parseQuery(this.props.location.search) || {query: ''};
        const {query} = parseQuery(props.location.search) || {query: ''};

        if (oldQuery !== query) {
            this.props.onLoadMovies(query);
        }
    }

    render() {
        return (
            <Preloader name="search">
                <MovieList movies={this.props.movies}/>
            </Preloader>
        )
    }
}

const mapStateToProps = state => ({
    movies: state.movies
});

const mapDispatchToProps = dispatch => ({
    onLoadMovies: (query) => dispatch(loadSearch(query)),
});


export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(Search));
