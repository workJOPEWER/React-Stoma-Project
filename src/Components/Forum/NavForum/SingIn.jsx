import React from "react";
import f from "./NavForum.module.scss";
import { Row, Col, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {connect} from 'react-redux'

const SingIn = (props) => {

  return (
    <div className={f.headBlock}>
      <Container>
        <div className={f.menuWrap}>
          <Row>
            <Col lg={6} md={6} xs={5} className={f.salut}>
              <span> Здравствуй, {props.guest}</span>
            </Col>
            <Col lg={6} md={6} xs={6} className={f.rightBlock}>
               <div className={f.log}>
                 <NavLink to={"/login"}>войти</NavLink>
               </div>
               <div className={f.registr}>
                 <a href="#">регистрация</a>
               </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    guest: state.auth.guest
  }
};
const mapDispatchToProps = (dispatch) => {
  return {}
}
export default connect (mapStateToProps, mapDispatchToProps)(SingIn);
