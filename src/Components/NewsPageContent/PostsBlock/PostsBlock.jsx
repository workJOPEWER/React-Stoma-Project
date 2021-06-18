import React from "react";
import s from "./PostsBlock.module.scss";
import { Row, Col } from "react-bootstrap";
import { Link, useRouteMatch } from "react-router-dom";
import Paginator from "../../../common/Paginator/Paginator";


const PostsBlock = (props) => {

  let { url } = useRouteMatch();

  const { posts } = props;

  if (!posts || posts.length === 0) return <p className={s.message}> Внимание! Скоро здесь будет много полезной информации!</p>;

  let pagesCount = Math.ceil(props.totalCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={s.newsContent}>
      {
        posts.map(post => <div key={post.id} className={s.newsItemBlock}>

            <Link to={`${url}/${post.id}`}>
              <Row className={s.newsHolder}>
                <div className={s.itemImage}>
                  <div className={s.imgHolder}>
                    <img src={post.thumbnail} alt=""/>
                  </div>
                </div>

                <Col className={s.itemContentHolder} md={8}>
                  <h4 className={s.itemTitle}> {post.title} </h4>
                  <p> {post.short_describe} </p>
                </Col>
                <Col className={s.additionalBlock}>
                  <div className={s.learnMore}> {props.changeDate} </div>
                  <div className={s.category}>
                    <span style={{ color: "#5e5e5e" }}>Категория:{
                      post.categories.map(cat => <span key={cat.name} className={s.categoryName}>
                       {cat.name}
                      </span>)
                    }</span>
                  </div>
                </Col>
              </Row>
            </Link>
          </div>
        )}

      <div className={s.pagination}>
        <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                   totalItemsCount={props.totalCount} pageSize={props.pageSize}/>
      </div>
    </div>
  );
};

export default PostsBlock;

