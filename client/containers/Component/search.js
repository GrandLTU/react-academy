import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import parseQuery from "../../core/parseQuery";

class Search extends React.Component {
    constructor(...args) {
        super(...args);
        this.onSearchChange = this.onSearchChange.bind(this);
        this.onSearch = this.onSearch.bind(this);

        this.state = {search: ''};
    }

    componentDidMount() {
        const {query} = parseQuery(this.props.location.search) || {query: ''};
        if (this.state.search !== query) {
            this.setState({search: query});
        }
    }

    onSearchChange(event) {
        this.setState({search: event.target.value});
    }

    onSearch(event) {
        event.preventDefault();

        this.props.history.push('/search?query=' + this.state.search);
    }

    render() {
        return (
            <div className="header-search">
                <form onSubmit={this.onSearch}>
                    <input type="text" className="header-search__input" value={this.state.search}
                           onChange={this.onSearchChange}/>
                    <div className="header-search__button" onClick={this.onSearch}>
                        <i className="fa fa-search"/>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(Search));

