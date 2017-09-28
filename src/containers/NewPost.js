import React from 'react'
import AddPost from '../components/AddPost';
import { browserHistory } from 'react-router';
import * as actions from '../actions/actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';



 class NewPost extends React.Component {
    submit(values) {
      console.log(values);

    }

    render() {
    const {actions,form, post  } = this.props;
      return (
            <div className="container">
                <AddPost actions={actions} formprops={form} post ={post} onSubmit={this.submit} />
            </div>
      )
    }
}
NewPost.propTypes = {
    actions: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,
};


function mapStateToProps(state) {
    const { post, form } = state;
    return {
        post,
        form
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
)(NewPost);
