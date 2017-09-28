import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actions from '../actions/actions';
import { RaisedButton } from 'material-ui';
import { browserHistory } from 'react-router';
import { compose } from 'redux';
import CircularProgress from 'material-ui/CircularProgress';
import PostItem from '../components/PostItem';




class Home extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const { post, actions  } = this.props;
        return (
            <div className="container">
                <PostItem post = {post} actions={actions }/>
            </div>
        );
    }
}

Home.propTypes = {
    actions: PropTypes.object.isRequired,
};


function mapStateToProps(state) {
    const { post } = state;
    return {
        post
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
