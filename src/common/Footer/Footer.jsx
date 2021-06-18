import React from "react";
import "./Footer.scss";
import { Row, Col, Container } from "react-bootstrap";
import SocialButtons from "../../Components/SocialButtons/SocialButtons";
import { connect } from "react-redux";

const Footer = (props) => {
  return (
    <footer className="footer_wrap">
      <div className="footer_info">
        <div className="container_wide">
          <Container>
            <Row className="main_footer_info">
              <Col md={7}>
                <div className="firstBlock">
                  <p>{props.about}</p>
                </div>
              </Col>
              <Col md={{ span: 4, offset: 1 }}>
                <div className="footer_social">
                  <div className="footerTitle">
                    <h4>Контакты</h4>
                  </div>
                    <SocialButtons />
                </div>
              </Col>
            </Row>
            <Row className="rightsHold">
              <Col>
                <div className="rightsText">
                  <p>@ права на сайт принадлежат Общественной Ассоциации Стомированных Людей РМ</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </footer>
  );
};

const mapStateToProps = (state) => {
 return{
   about: state.footer.about
 }


};
const mapDispatchToProps = (dispatch) => {
  return{};
};

export default connect (mapStateToProps, mapDispatchToProps)(Footer);
