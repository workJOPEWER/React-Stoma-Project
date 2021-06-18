import React from "react";
import f from "./Registration.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import RegistrationForm from './RegistrationForm';
// import {radioChanged } from '../../redux/registration-reducer';
import { connect } from "react-redux";

const RegistrationPage = (props) => {

  const onSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <div className="page-wrapper">
      <div className={f.formWrap}>
        <Container>
          <Row>
            <Col md={{ span: 7, offset: 2 }}>
              <div className={f.heading}>
                <h3 className={f.subtitle}>зарегистрируйтесь</h3>
                <h3 className={f.title}>Создайте свои аккаунт </h3>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 7, offset: 2 }}>
              <RegistrationForm onSubmit={onSubmit} radioChanged={radioChanged} options={props.options}/>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 7, offset: 2 }}>
              <div className={f.infoBlock}>
                <p> При создание аккаунта Вы соглашаетесь с
                  <a href=""> Условия использования stoma.md</a>. Для получения
                  дополнительной информации о правилах конфиденциальности stoma.md
                  см. <a href="">Заявление о конфиденциальности stoma.md</a>.
                  Время от времени мы будем отправлять вам письма, связанные с аккаунтом.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  options: state.registration.options,

});

export default connect(mapStateToProps, {radioChanged})(RegistrationPage);

