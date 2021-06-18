import React from "react";
import s from "./InformationArticleItem.module.scss";


const InformationArticleItem = ({ post }) => {

  if (!post) {
    return <p> nothing </p>;
  }

  return (
      <div className={s.articleBlock}>
        <div className={s.headingBlock}>
          <h2 className={s.headingTitle}>{post.title}</h2>
        </div>
        <div className={s.textBlock}
             dangerouslySetInnerHTML={{ __html: post.post_content}}>
        </div>
      </div>
  );
};

export default InformationArticleItem;