import React from "react";
import { connect } from "react-redux";
import Posts from "./Posts";
import { addPostActionCreator } from "./posts-reducer";


let mapStateToProps = (state) => {

  return {
    posts: state.posts,
    newPostText: state.posts.newPostText

  };
};
let MapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText));
    }
  };
};
export default connect(mapStateToProps, MapDispatchToProps)(Posts);

