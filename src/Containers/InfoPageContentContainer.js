import React from "react";
import { connect } from "react-redux";
import Preloader from "../common/Preloader/Preloader";
import {setCategoryInfo} from "../redux/accordion-reducer";
import InformationContent from "../Components/InformationContent/InformationContent";

class InfoPageContentContainer extends React.Component {

  render() {
    return <>
      {this.props.isFetching ? <Preloader/> : null}
      <InformationContent cards={this.props.categoryInfo}/>
    </>
  }
}

let mapStateToProps = (state) => {

  return {
    categoryInfo: state.accordion.categoryInfo,

  };
};

export default connect(mapStateToProps,
  {setCategoryInfo })(InfoPageContentContainer);