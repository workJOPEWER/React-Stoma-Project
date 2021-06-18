import React from "react";
import CategoryForum from "../CategoryForum/CategoryForum";
import { BlockCommonContentTemplate } from "../Templates/Forum/BlockCommonContent";

const ForumPage = (props) => {
  return (
    <div className="page-wrapper">
      <BlockCommonContentTemplate>
        <CategoryForum table={props.table} category={props.category}/>
      </BlockCommonContentTemplate>
    </div>
  );
};

export default ForumPage;
