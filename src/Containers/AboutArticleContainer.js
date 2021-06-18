import React from "react";
import { connect } from "react-redux";
import Preloader from "../common/Preloader/Preloader";
import { withRouter } from "react-router-dom";
import { setCategoryArticle } from "../redux/accordion-reducer";
import * as axios from "axios";
import InformationArticleItem from "../Components/InformationContent/InfoArticleItem/InformationArticleItem";

class AboutArticleContainer extends React.Component {

  componentDidMount() {
    let slug = this.props.match.params.slug;
    let id = this.props.match.params.id;
    axios.get(`https://admin.stoma.md/api/admin/about/categories/${slug}/${id}`)
      .then(response => {
        this.props.setCategoryArticle(response.data);
      });
  }

  componentDidUpdate(prevProps) {
    const currentSlug = this.props.match.params.id;
    const prevSlug = prevProps.match.params.id;

    if (currentSlug !== prevSlug) {
      let slug = this.props.match.params.slug;
      let id = this.props.match.params.id;

      axios.get(`https://admin.stoma.md/api/admin/about/categories/${slug}/${id}`)
        .then(response => {
          this.props.setCategoryArticle(response.data);
        });
    }
  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader/> : null}
      <InformationArticleItem {...this.props} post={this.props.categoryArticle}/>
    </>;
  }
}

let mapStateToProps = (state) => {

  return {
    categoryArticle: state.accordion.categoryArticle
  };
};

let withUrlDataContainerComponent = withRouter(AboutArticleContainer);
export default connect(mapStateToProps,
  { setCategoryArticle })(withUrlDataContainerComponent);