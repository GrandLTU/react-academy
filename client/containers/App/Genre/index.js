import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import GenreMovieList from "./movieList";
import GenreList from "./list";

export const Genre = () => {
    return (
        <div className="row">
            <div className="col-sm-3">
                <GenreList/>
            </div>

            <div className="col-sm-9">
                <Switch>
                    <Route path={'/genres/:genre'} exact={true} component={GenreMovieList}/>
                    <Route path={'/genres'} exact={true} render={() => (
                        <div className="genre-title">
                            Please select a genre
                        </div>)
                    }/>
                    <Route path={'/genres'} exact={false} render={() => (
                        <div className="genre-title">
                            Page not found
                        </div>)
                    }/>
                </Switch>
            </div>
        </div>
    )
};
