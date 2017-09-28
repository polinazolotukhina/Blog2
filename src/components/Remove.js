import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
export default class DialogExampleSimple extends React.Component {
    constructor(props){
        super(props);
        this.state={open: false}
        this.handleOpen  = this.handleOpen .bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleCloseDelete = this.handleCloseDelete.bind(this);
    }

  handleOpen() {
    this.setState({open: true});
  };

  handleClose(){
    this.setState({open: false});
  };
  handleCloseDelete(){
      this.props.myactions.deletePost(this.props.item)
      this.setState({open: false});
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Delete"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleCloseDelete}
      />,
    ];
const { item, myactions } = this.props;
    return (
      <div>
        <RaisedButton label="Delete" onClick={this.handleOpen} />
        <Dialog
          title="Are You Sure?"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Once the post is deleted it can not be restored.
        </Dialog>
      </div>
    );
  }
}
