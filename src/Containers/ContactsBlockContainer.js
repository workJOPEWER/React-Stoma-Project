import React from 'react'
import { connect } from "react-redux";
import ContactsBlock from "../Pages/Contacts/ContactsBlock/ContactsBlock";


let mapStateToProps =(state) => {

  return {
    info: state.contacts.infoContacts,
    heading: state.contacts.heading
  };
};

let mapDispatchToProps = (dispatch) => {
  return{};
};



export default connect(mapStateToProps, mapDispatchToProps)(ContactsBlock);