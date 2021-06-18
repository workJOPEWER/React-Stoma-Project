import React from "react";
import { connect } from "react-redux";
import Mainpage from "../Pages/Mainpage/Mainpage";

let mapStateToProps = (state) => {

  return {
    headTitle: state.headBlock.home,
    heading:state.mainPage.headings,
    themes: state.mainPage.themes,
    about: state.mainPage.about,
    info: state.contacts.contacts.info,
    partners: state.mainPage.partners,
    pathToProject: state.mainPage.pathToProject,
    pathToAbout: state.mainPage.pathToAbout,
    title: state.title.main

  };
};

let MapDispatchToProps = (dispatch) => {
  return {};
};


export default connect(mapStateToProps, MapDispatchToProps)(Mainpage);