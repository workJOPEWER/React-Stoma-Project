import React from "react";
import { connect } from "react-redux";
import InfoPage from "../Pages/InfoPage/InfoPage";

let mapStateToProps = (state) => {
  return {
    headBlock: state.headBlock.info,
    title: state.title.info

  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};


export default connect(mapStateToProps, mapDispatchToProps)(InfoPage);