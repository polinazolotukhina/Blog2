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
    const { post } = this.props;
    console.log(post.post[0].title)

    return (
      <div className="container">
        <h2>{post.post&&post.post[this.props.location.query.id]&&post.post[this.props.location.query.id].title}</h2>
        <h4>{post.post&&post.post[this.props.location.query.id]&&post.post[this.props.location.query.id].subtitle}</h4>
        <p>{post.post&&post.post[this.props.location.query.id]&&post.post[this.props.location.query.id].notes}</p>
      </div>
    );
  }
}

Post.propTypes = {
    actions: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired
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
