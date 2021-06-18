import React, { useState } from "react";
import s from "./AboutContent.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import AccordionBlock from "../Accordion/Accordion";
import AboutArticleContainer from "../../Containers/AboutArticleContainer";
import AboutAccordionCardContainer from "../../Containers/AboutAccordionCardContainer";


const AboutContent = (props) => {

  let { path } = useRouteMatch();
  const [cliked, setCliked] = useState(false);

  const handleClick = () => {
    if (!cliked) {
      setCliked(true);
    } else setCliked(false);
  };

  return (
    <Container>
      <Row>
        <Col md={4}>
          <div className={s.pageThames} onClick={handleClick}>
            {
              !cliked
                ? <span>Темы страницы</span>
                : <span>Close</span>
            }
          </div>
          <div className={s.accordWrapper}>
            <AccordionBlock/>
          </div>
          <div style={{ display: cliked ? "block" : "none" }}>
            <AboutAccordionCardContainer/>
          </div>
        </Col>
        <Col md={8}>
          <Switch>
            <Route exact path={`${path}/:slug/:id`} render={() => <AboutArticleContainer/>}/>
          </Switch>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutContent;