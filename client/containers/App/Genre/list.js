import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import {loadGenres} from "../../../core/modules/genres/genresActions";
import Preloader from '../../Component/preloader'
import classNames from 'classnames';

class GenreList extends React.Component {
    componentDidMount() {
        this.props.onLoadGenres();
    }

    render() {
        return (
            <Preloader name="genres">
                <div className="list">
                    {this.props.genres.map(genre => (
                        <div
                            onClick={() => this.props.history.push('/genres/' + genre.name)}
                            key={genre.id}
                            className={classNames({
                                'list-item': true,
                                'is-active': this.props.match.params.genre === genre.name,
                            })}>{genre.name}</div>
                    ))}
                </div>
            </Preloader>
        )
    }
}

const mapStateToProps = state => ({genres: state.genres});

const mapDispatchToProps = dispatch => ({
    onLoadGenres: () => dispatch(loadGenres()),
});


export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(GenreList));

