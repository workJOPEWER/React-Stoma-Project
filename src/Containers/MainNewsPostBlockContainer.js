import React from "react";
import { connect } from "react-redux";
import Preloader from "../common/Preloader/Preloader";
import { getNews } from "../redux/mainPage-reducer";
import MainPostBlock from "../Components/MainPageNewsBlock/MainPostBlock";

class MainNewsPostBlockContainer extends React.Component {

  componentDidMount() {
    this.props.getNews();
  }

  render() {

    return <>
      <MainPostBlock posts={this.props.newsPosts}/>
    </>;
  }
}

let mapStateToProps = (state) => {

  return {
    newsPosts: state.mainPage.newsPosts
  };
};

export default connect(mapStateToProps,
  { getNews })(MainNewsPostBlockContainer);