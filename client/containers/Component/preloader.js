import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class Preloader extends React.Component {
    isActive() {
        return !!this.props.preloader.get(this.props.name);
    }

    render() {
        return this.isActive()
            ? (<div className="preloader"/>)
            : (<div>{this.props.children}</div>)
    }
}

const mapStateToProps = state => ({preloader: state.preloader});

const mapDispatchToProps = () => ({});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(Preloader));

