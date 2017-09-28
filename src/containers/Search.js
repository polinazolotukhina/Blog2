import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actions from '../actions/actions';
import PropTypes from 'prop-types';
import { RaisedButton } from 'material-ui';
import TextField from 'material-ui/TextField';
import SearchList from '../components/SearchList';




 class Search extends Component {
     constructor(props) {
         super(props);
         this.state = {input: '', querry:'', hidePosts:false}
         this.handleChange = this.handleChange.bind(this);
         this.searchForPost = this.searchForPost.bind(this);

       }
    handleChange(e){
        this.setState({ input: e.target.value.toLowerCase() });
    }
    searchForPost(){
        this.setState({ hidePosts : true})
        this.props.actions.searchPost(this.state.input)
    }
    render() {
        const { post } = this.props;
        console.log("Fatima", post.search.length)
        return (
          <div className="container">
            <TextField onChange={this.handleChange} hintText="Search for posts..."/>
            <RaisedButton primary={true} onClick={this.searchForPost} label="Search" primary={true} />
            {(post.search.length == 0) ?(<h2>No result by this search</h2>):(<SearchList search={post.search } />)}
          </div>
        );
    }
}

Search.propTypes = {
    actions: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired,
};


function mapStateToProps(state) {
    const { post, search } = state;
    return {
        post,
        search
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
)(Search);
