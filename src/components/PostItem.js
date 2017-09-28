import React, { Component } from 'react';
import { FlatButton } from 'material-ui';
import { browserHistory } from 'react-router';
import Remove from '../components/Remove';
import CircularProgress from 'material-ui/CircularProgress';
import { RaisedButton } from 'material-ui';


export default class  PostItem extends Component {
  render() {
      const { post, actions } = this.props;
        return (
            (post.isLoading) ? (<div className = "load"><CircularProgress size={80} thickness={5} /></div>
            ): (
                (post.post.length>0) ?(
                    <div>
                        {
                            post && post.post.map((item, index) =>
                                <div key={index}>
                                    <h2>{item.title}</h2>
                                    <h4>{item.subtitle}</h4>
                                    <p>{item.notes}</p>
                                    <Remove myactions = {actions} item={item} />
                                </div>
                            )
                        }
                    </div>
                ):(
                    <div>
                        <h2>Posts list is empty</h2>
                        <RaisedButton label="Create a new post" onClick={()=>{browserHistory.push('/newpost')}} />
                  </div>
                )




            )

      )
  }
}
