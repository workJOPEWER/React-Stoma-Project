import React from "react";
import { connect } from "react-redux";
import Preloader from "../common/Preloader/Preloader";
import { getArticles } from "../redux/mainPage-reducer";
import MainPostBlock from "../Components/MainPageNewsBlock/MainPostBlock";

class MainArticlePostBlockContainer extends React.Component {

  componentDidMount() {
    this.props.getArticles();
  }

  render() {
    return <>
      <MainPostBlock posts={this.props.articlesPosts}/>
    </>;
  }
}

let mapStateToProps = (state) => {

  return {
    articlesPosts: state.mainPage.articlesPosts
  };
};

export default connect(mapStateToProps,
  { getArticles })(MainArticlePostBlockContainer);