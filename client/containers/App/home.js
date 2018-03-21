import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export const Home = ({ history }) => {
  return (
    <div className="row">
      <div className="col-sm-5">
        <div className="subtitle">Welcome to</div>
        <div className="title">Movies repository</div>
        <div onClick={() => history.push('/genres')} className="btn">
          Select a genre
        </div>
      </div>

      <div className="col-sm-7">
        <div className="menu">
          <div className="row">
            <div className="col-sm-4">
              <div onClick={() => history.push('/search')} className="menu-item"
                   style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w342/A30ZqEoDbchvE7mCZcSp6TEwB1Q.jpg')`}}>
                <span>All</span>
              </div>
            </div>

            <div className="col-sm-4">
              <div onClick={() => history.push('/search')} className="menu-item"
                   style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w342/paT9Ovofjj30JvsDRyhFfjgUEfn.jpg')`}}>
                <span>Search</span>
              </div>
            </div>

            <div className="col-sm-4">
              <div onClick={() => history.push('/genres')} className="menu-item"
                   style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w342/vsjBeMPZtyB7yNsYY56XYxifaQZ.jpg')`}}>
                <span>Genres</span>
              </div>
            </div>

            <div className="col-sm-4">
              <div onClick={() => history.push('/most-popular')} className="menu-item"
                   style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w342/vjZRXcAUH33SHsQeMScwsZcA5uk.jpg')`}}>
                <span>Most popular</span>
              </div>
            </div>

            <div className="col-sm-4">
              <div onClick={() => history.push('/top-rated')} className="menu-item"
                   style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w342/nbIrDhOtUpdD9HKDBRy02a8VhpV.jpg')`}}>
                <span>Top rated</span>
              </div>
            </div>

            <div className="col-sm-4">
              <div onClick={() => history.push('/upcoming')} className="menu-item"
                   style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w342/8fDHXLHYTOLR064YIWxxcVVl2qz.jpg')`}}>
                <span>Upcoming</span>
              </div>
            </div>

            <div className="col-sm-4">
              <div onClick={() => history.push('/wishlist')} className="menu-item"
                   style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w342/xSxlmtLz2NYtO07N4WexY1y53pl.jpg')`}}>
                <span>Wishlist</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
