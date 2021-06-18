import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PostsBlock from "../Components/NewsPageContent/PostsBlock/PostsBlock";
import { setCurrentPage, setDateFormat, setPostsList, getCatPosts } from "../redux/newsPage-reducer";
import { getCurrentPage, getIsFetching, getPageSize, getPosts, getTotalCount } from "../redux/post-selectors";

class CategoryPostsBlockContainer extends React.Component {

  componentDidMount() {
    let slug = this.props.match.params.slug;
   this.props.getCatPosts(this.props.currentPage, this.props.pageSize, slug)
  }

  componentDidUpdate(prevProps) {
    const currentSlug = this.props.match.params.slug;
    const prevSlug = prevProps.match.params.slug;

    if (currentSlug !== prevSlug) {
      let slug = this.props.match.params.slug;
      this.props.getCatPosts(this.props.currentPage, this.props.pageSize, slug)
    }
  }

  onPageChanged = (pageNumber) => {
    let slug = this.props.match.params.slug;
    this.props.getCatPosts(pageNumber, this.props.pageSize, slug)
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps != this.props && nextState !=this.state;
  // }

  render() {

    // let changeDate = moment(this.props.date).format("DD-MM-YYYY HH:mm:ss");

    return (
      <PostsBlock totalCount={this.props.totalCount}
                  pageSize={this.props.pageSize}
                  currentPage={this.props.currentPage}
                  onPageChanged={this.onPageChanged}
                  posts={this.props.posts}
                  />
    );
  }
}

let mapStateToProps = (state) => {

  return {
    posts: getPosts(state),
    pageSize: getPageSize(state),
    totalCount: getTotalCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state)
  };
};
let withUrlDataContainerComponent = withRouter(CategoryPostsBlockContainer);
export default connect(mapStateToProps,
  { setCurrentPage, setDateFormat, setPostsList, getCatPosts })(withUrlDataContainerComponent);