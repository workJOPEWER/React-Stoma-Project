import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import NewsBlockContainer from "../../Containers/NewsPostBlockContainer";
import ArticlesBlockContainer from "../../Containers/ArticlesPostBlockContainer";
import CategoryPostBlockContainer from "../../Containers/CategoryPostBlockContainer";
import CategoriesContainer from "../../Containers/CategoriesContainer";
import NewsItemContainer from "./../../Containers/NewsItemContainer";
import ArticlesItemContainer from "./../../Containers/ArticlesItemContainer";
import CategoryItemContainer from "./../../Containers/CategoryItemContainer";
import NewsNavLinks from "./NewsNavLinks/NewsNavLinks";

const NewsContent = (props) => {

  let { path } = useRouteMatch();

  return (
    <Container>
      <Row>
        <Col sm={8}>
          <NewsNavLinks/>
          <Container>
            <Switch>
              <Route exact path={`${path}/news`} render={() => <NewsBlockContainer/>}/>
              <Route path={`${path}/news/:id`} render={() => <NewsItemContainer/>}/>
              <Route exact path={`${path}/article`} render={() => <ArticlesBlockContainer/>}/>
              <Route path={`${path}/article/:id`} render={() => <ArticlesItemContainer/>}/>
              <Route exact path={`${path}/category/:slug`} render={() => <CategoryPostBlockContainer/>}/>
              <Route path={`${path}/category/:slug/:id`} render={() => <CategoryItemContainer/>}/>
            </Switch>
          </Container>
        </Col>
        <Col sm={4}>
          <CategoriesContainer/>
        </Col>
      </Row>
    </Container>
  );
};

export default NewsContent;

