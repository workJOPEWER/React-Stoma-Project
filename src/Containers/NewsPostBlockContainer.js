import React from "react";
import { connect } from "react-redux";
import { setCurrentPage, setDateFormat, getNews } from "../redux/newsPage-reducer";
import PostsBlock from "../Components/NewsPageContent/PostsBlock/PostsBlock";
import * as moment from "moment";
import Preloader from "../common/Preloader/Preloader";

class NewsPostBlockContainer extends React.Component {


  componentDidMount() {
    let {currentPage, pageSize} = this.props;
    this.props.getNews(currentPage, pageSize);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps != this.props && nextState !=this.state;
  // }

  onPageChanged = (pageNumber) => {
    const {pageSize} = this.props;
    this.props.getNews(pageNumber,pageSize);
  };

  render() {
    let changeDate = moment(this.props.date).format("DD-MM-YYYY HH:mm:ss");

    return <>
      {this.props.isFetching ? <Preloader/> : null}
      <PostsBlock totalCount={this.props.totalCount}
                  pageSize={this.props.pageSize}
                  currentPage={this.props.currentPage}
                  onPageChanged={this.onPageChanged}
                  posts={this.props.posts}
                  changeDate={changeDate}
      />
    </>
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
  {
    setCurrentPage, setDateFormat, getNews
  })(NewsPostBlockContainer);