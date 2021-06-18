import React from "react";
import { connect } from "react-redux";
import About from "../Pages/AboutUsPage/About";

let mapStateToProps = (state) => {
  return {
    headBlock:state.headBlock.about,
    title: state.title.about,
    cards:state.aboutPage.cards,
    articles:state.aboutPage.articles,
    aboutDescr:state.aboutPage.aboutDescr

  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};


export default connect(mapStateToProps, mapDispatchToProps)(About);