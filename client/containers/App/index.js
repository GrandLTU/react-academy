import React from 'react';
import {connect} from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import classNames from 'classnames';
import Search from '../Component/search'

class AllPages extends React.Component {
    constructor(...args) {
        super(...args);
        this.isActive = this.isActive.bind(this);
    }

    isActive(path) {
        return this.props.location.pathname.startsWith(path);
    }

    render() {
        const pages = {
            '/': {title: 'MOVIES', logo: true},
            '/genres': {title:'Genres', logo: false},
            '/most-popular': {title:'Most popular', logo: false},
            '/top-rated': {title:'Top rated', logo: false},
            '/upcoming': {title:'Upcoming', logo: false},
        };

        return (
            <div className="app-image"
                 style={{ backgroundImage: `url('${this.props.background}')`}}>
                <div className="app-colors">
                    <div className="app-container">
                        <div className="header">
                            {Object.entries(pages).map(([path, {title, logo}]) => (
                                <Link key={path} to={path} className={classNames({
                                    'header__logo': logo,
                                    'header__action': !logo,
                                    'is-active': !logo && this.isActive(path)
                                })}>{title}</Link>
                            ))}

                            <Search/>
                        </div>

                        <div className="container-fluid">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({background: state.background});

const mapDispatchToProps = () => ({});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(AllPages));

