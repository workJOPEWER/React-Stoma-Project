import React, {useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Switch, Route, useRouteMatch, useLocation } from "react-router-dom";
import ContactLinks from "./ContactsLinks/ContactLinks";
import ContactsBlock from "./ContactsBlock/ContactsBlock";
import DonateBlock from "./DonateBlock/DonateBlock";
import UsefulLinks from "./UsefulLinks/UsefulLinks";

const ContactContent = (props) => {

  let { path } = useRouteMatch();

  return (
    <Container>
      <Row>
        <Col sm={8}>
          <ContactLinks/>
          <Container>
            <Switch>
              <Route exact path={`${path}/info`} render={() => <ContactsBlock/>}/>
              <Route path={`${path}/donate`} render={() => <DonateBlock/>}/>
            </Switch>
          </Container>
        </Col>
        <Col sm={4}>
          {/*<UsefulLinks />*/}
        </Col>
      </Row>
    </Container>
  );
};

export default ContactContent;

