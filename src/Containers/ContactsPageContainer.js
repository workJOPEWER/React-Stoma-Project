import React from 'react'
import { connect } from "react-redux";
import ContactsPage from "../Pages/Contacts/ContactsPage";


let mapStateToProps =(state) => {

  return {
    titles: state.tabsBlock.titles.contacts,
    headBlock: state.headBlock.contacts,
    path: state.tabsBlock.path,
    headings: state.contacts.headings,
    title: state.title.contacts

  };
};

let mapDispatchToProps = (dispatch) => {
  return{};
};



export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);