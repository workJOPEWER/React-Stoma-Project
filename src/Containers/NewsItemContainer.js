import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PostItem from "../Components/NewsPageContent/PostItem/PostItem";
import { setPostItem, setDateFormat } from "../redux/newsPage-reducer";
import * as axios from "axios";
import * as moment from "moment";

class NewsItemContainer extends React.Component {

  componentDidMount() {
    let id = this.props.match.params.id;
    axios.get("https://admin.stoma.md/api/admin/news/" + id)
      .then(response => {
        this.props.setPostItem(response.data);
        this.props.setDateFormat(response.data.created_at);
      });
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps != this.props && nextState != this.state;
  // }

  render() {

    let changeDate = moment(this.props.date).format("DD-MM-YYYY HH:mm:ss");

    return <PostItem {...this.props} postItem={this.props.postItem} changeDate={changeDate}/>;
  }

}

let mapStateToProps = (state) => {
  return {

    postItem: state.newsPage.postItem,
    date: state.newsPage.date
  };
};


let withUrlDataContainerComponent = withRouter(NewsItemContainer);
export default connect(mapStateToProps, { setPostItem, setDateFormat })(withUrlDataContainerComponent);