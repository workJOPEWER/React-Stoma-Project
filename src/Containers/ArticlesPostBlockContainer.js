import React from "react";
import { connect } from "react-redux";
import { setCurrentPage, setDateFormat, getArticles } from "../redux/newsPage-reducer";
import * as moment from "moment";
import PostsBlock from "../Components/NewsPageContent/PostsBlock/PostsBlock";

class ArticlesPostBlockContainer extends React.Component {

  componentDidMount() {
    this.props.getArticles(this.props.currentPage, this.props.pageSize);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps != this.props && nextState !=this.state;
  // }

  onPageChanged = (pageNumber) => {
    this.props.getArticles(pageNumber, this.props.pageSize);
  };

  render() {
    let changeDate = moment(this.props.date).format("DD-MM-YYYY HH:mm:ss");


    return <PostsBlock totalCount={this.props.totalCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       posts={this.props.posts}
                       changeDate={changeDate}
    />;
  }
}

let mapStateToProps = (state) => {

  return {
    posts: state.newsPage.posts,
    pageSize: state.newsPage.pageSize,
    totalCount: state.newsPage.totalCount,
    currentPage: state.newsPage.currentPage,
    isFetching: state.newsPage.isFetching
  };
};

export default connect(mapStateToProps,
  { setCurrentPage, setDateFormat, getArticles })(ArticlesPostBlockContainer);