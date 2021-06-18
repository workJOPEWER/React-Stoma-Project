import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import s from "./InformationContent.module.scss";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import AccordionBlock from "../Accordion/Accordion";
import InfoAccordionCardContainer from "./../../Containers/InfoAccordionCardContainer";
import InformationArticleContainer from "./../../Containers/InformationArticleContainer";

const InformationContent = (props) => {

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
          <button className={s.pageThames} onClick={handleClick}>
            {
              !cliked
                ? <span>Темы страницы</span>
                : <span>Close</span>
            }
          </button>
          <div className={s.accordWrapper}>
            <AccordionBlock/>
          </div>
          <div style={{ display: cliked ? "block" : "none" }}>
            <InfoAccordionCardContainer/>
          </div>
        </Col>
        <Col md={8}>
          <Switch>
            <Route exact path={`${path}/:slug/:id`} render={() => <InformationArticleContainer/>}/>
          </Switch>
        </Col>
      </Row>
    </Container>
  );
};

export default InformationContent;
