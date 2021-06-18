import React from "react";
import { Row, Col } from "react-bootstrap";
import "./NewsMain.scss";
import Headings from "../../../Components/Headings/Body/Headings";
import MainNewsPostBlockContainer from "../../../Containers/MainNewsPostBlockContainer";
import MainArticlePostBlockContainer from "../../../Containers/MainArticlePostBlockContainer";

const NewsMain = (props) => {

  return (
    <div className="news_wrapper">
      <div className="container_wide">
        <div className="container">
          <div className="news_articles">
            <Headings heading={props.heading}/>
          </div>
          <div className="latest_n">
            <Row className="newsItems">
              <Col sm={6}>
                <MainNewsPostBlockContainer/>
              </Col>
              <Col sm={6}>
                <MainArticlePostBlockContainer/>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsMain;
