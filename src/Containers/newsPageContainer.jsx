import React from "react";
import { connect } from "react-redux";
import NewsPage from "../Pages/NewsPage/NewsPage";

let mapStateToProps = (state) => {

  return {
    headings: state.headBlock.news,
    title: state.title.news,
  };
};

let MapDispatchToProps = (dispatch) => {
  return {};
};


export default connect(mapStateToProps, MapDispatchToProps)(NewsPage);