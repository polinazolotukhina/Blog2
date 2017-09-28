import React, { Component } from 'react';
import { FlatButton } from 'material-ui';
import { browserHistory } from 'react-router';
import Remove from '../components/Remove';
import CircularProgress from 'material-ui/CircularProgress';
import { RaisedButton } from 'material-ui';


export default class  PostItem extends Component {
  render() {
      const { search } = this.props;
        return (
            <div>


               {
                 search && search.map((item, index) =>
                    <div key={index}>
                        <h2>{item.title}</h2>
                        <h4>{item.subtitle}</h4>
                        <p>{item.notes}</p>
                    </div>
                )
               }


            </div>





      )
  }
}
