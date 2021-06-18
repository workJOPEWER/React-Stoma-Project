import React from "react";
import s from "./PostItem.module.scss";
import Care from "../../../assets/care.jpg";
// import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const PostItem = (props) => {
  console.log(props)

  if(!props.postItem) {
    return <p> nothing </p>
  }

  return (
    <div className={s.newsItemWrapper}>
      <div className={s.newsImageWrapper}>
        <div className={s.imageBlock}>
          <img src={props.postItem.thumbnail != null ? props.postItem.thumbnail : Care } alt=""/>
        </div>
      </div>

      <div className={s.newsItemTitle}>
        <Container>
          <div className={s.heading}> {props.postItem.title} </div>
        </Container>
      </div>

      <div className={s.dataBlock}>
        <div className={s.dataData}>
          Опубликовано:
          <span> {props.changeDate} </span>
        </div>
      </div>
      <div className={s.textBlock}>
        <p dangerouslySetInnerHTML={{ __html: props.postItem.post_content}} />
      </div>
      <div className={s.socialBlock}>
        <span className={s.socialShare}>{/*share this news*/} </span>
      </div>
      <div className={s.linkToNews}>
        {/*<Link to={"/news"}>*/}
          {/*<span>вернуться на страницу главную</span>*/}
        {/*</Link>*/}
      </div>
    </div>
  );
};

export default PostItem;