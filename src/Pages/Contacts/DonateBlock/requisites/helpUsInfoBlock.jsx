import React from "react";
import s from "./requisites.module.scss";
import { Container, Row, Col } from "react-bootstrap";

const HelpUsInfoBlock = (props) => {
  return (

        <div className={s.moreInfoHelp}>
          <Container>
            <Row>
              <Col>
                <ul style={{color:"#5e5e5e"}}>
                  <li>1. Вы можете стать активистом!</li>
                  <li>2. Вы можете поддержать нас финансово.</li>
                  <li></li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
  );
};

export default HelpUsInfoBlock;