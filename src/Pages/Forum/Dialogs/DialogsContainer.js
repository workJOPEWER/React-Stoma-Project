import React from 'react';
import { connect } from 'react-redux';
import { sendMessageCreator} from "./dialogs-reducer";
import Dialogs from './Dialogs';
// import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';


let mapStateToProps = (state) => {
  return {
    table: state.dialogs.table,
    messages: state.dialogs.messages,
    newMessageBody: state.dialogs.newMessageBody
  };
};

let MapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageBody) => {
      dispatch(sendMessageCreator(newMessageBody));
    }
  };
};

export default compose(
  connect(mapStateToProps, MapDispatchToProps),
  // withAuthRedirect
)(Dialogs);

