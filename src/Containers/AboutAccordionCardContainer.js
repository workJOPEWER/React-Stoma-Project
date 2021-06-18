import React from "react";
import { connect } from "react-redux";
import Preloader from "../common/Preloader/Preloader";
import AccordionCard from "../Components/Accordion/AccordionCard";
import { setCategoryInfo } from "../redux/accordion-reducer";
import * as axios from "axios";

class AboutAccordionCardContainer extends React.Component {

  componentDidMount() {
    axios.get("https://admin.stoma.md/api/admin/about/categories")
      .then(response => {
        this.props.setCategoryInfo(response.data);
      });
  }

  render() {

    return <>
      {this.props.isFetching ? <Preloader/> : null}
      <AccordionCard {...this.props} cards={this.props.categoryInfo}/>
    </>;
  }
}

let mapStateToProps = (state) => {

  return {
    categoryInfo: state.accordion.categoryInfo
  };
};

export default connect(mapStateToProps,
  { setCategoryInfo })(AboutAccordionCardContainer);
