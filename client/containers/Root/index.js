import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import App from '../App';
import {Home} from "../App/home";
import {List} from "../App/list";
import {Genre} from "../App/Genre";
import Movie from "../App/movie";
import MostPopular from "../App/mostPopular";
import TopRated from "../App/topRated";
import Upcoming from "../App/upcoming";
import Search from "../App/search";

const Root = ({ store, history }) => (
  <BrowserRouter>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App>
          <Switch>
            <Route path="/most-popular" exact={true} component={MostPopular}/>
            <Route path="/top-rated" exact={true} component={TopRated}/>
            <Route path="/upcoming" exact={true} component={Upcoming}/>
            <Route path="/movie/:movieId" exact={true} component={Movie}/>
            <Route path="/wishlist" exact={true} component={List}/>
            <Route path="/search" exact={true} component={Search}/>
            <Route path="/" exact={true} component={Home}/>
            <Route path="/genres/:genre?" component={Genre}/>
            <Route path="/" component={() => '404'}/>
          </Switch>
        </App>
      </ConnectedRouter>
    </Provider>
  </BrowserRouter>
);

export default Root;
