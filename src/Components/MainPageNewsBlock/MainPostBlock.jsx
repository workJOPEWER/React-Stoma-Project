import React from "react";
import s from "./MainPostBlock.module.scss";
import {useRouteMatch} from "react-router-dom";
import { Row, Col } from "react-bootstrap";


const MainPostBlock = (props) => {

  let { url } = useRouteMatch();

  return (
    <div className={s.newsItemBlock}>
      {
        props.posts.slice(-3).map(
          news => <Row className={s.newsHolder} key={news.title}>
            <Col>
              <h3 className={s.newsTitle}>{news.title}</h3>
              <div className={s.newsDescr}>
                <p>{news.short_describe}
                  <span className={s.arrow}>
                  <a href={`/blog/${news.post_type}/${news.id}`}> подробнее ...</a></span>
                </p>
              </div>
            </Col>
          </Row>)
      }

    </div>

  );
};

export default MainPostBlock;
