import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators} from 'redux';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';
import { RaisedButton } from 'material-ui';
import { browserHistory } from 'react-router';
import { compose } from 'redux';
import Remove from '../components/Remove';



 class Post extends Component {


  render() {
    const { posts } = this.props;
    return (
      <div className="container">


      POSt
      </div>
    );
  }
}

Post.propTypes = {
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
)(Post);
