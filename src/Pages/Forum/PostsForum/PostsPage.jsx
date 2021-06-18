import React from "react";
import f from "./Posts.module.scss";
import PostsContainer from "./PostsContainer";
import { BlockCommonContentTemplate } from "../Templates/Forum/BlockCommonContent";

const PostsPage = (props) => {
  return (
      <div className="page-wrapper">
        <BlockCommonContentTemplate>
          <PostsContainer />
        </BlockCommonContentTemplate>
      </div>
    )
  }

  export default PostsPage;


