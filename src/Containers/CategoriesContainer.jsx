import React from "react";
import { connect } from "react-redux";
import Categories from "../Components/Categories/Categories";
import { getCategoryName } from "../redux/newsPage-reducer";


class CategoriesContainer extends React.Component {

  componentDidMount() {
    this.props.getCategoryName();
  }


  render() {
    return <>
      <Categories categoryName={this.props.categoryName}/>
    </>
  }
}

let mapStateToProps = (state) => {
  return {
    categoryName: state.newsPage.categoryName,
  }
};

export default connect(mapStateToProps, { getCategoryName })(CategoriesContainer);