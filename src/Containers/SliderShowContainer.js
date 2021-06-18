import React from "react";
import { connect } from "react-redux";
import SliderShow from "../Pages/Mainpage/Partners/Slider/SliderShow";


let mapStateToProps = (state) => {

  return {
    partners: state.mainPage.partners
  };
};

let MapDispatchToProps = (dispatch) => {
  return {};
};


export default connect(mapStateToProps, MapDispatchToProps)(SliderShow);