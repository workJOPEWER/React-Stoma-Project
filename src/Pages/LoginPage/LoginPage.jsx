import React from "react";
import f from "./Login.module.scss";
import s from "../../common/formsControls/FormsControls.module.scss";
import ButtonForm from "../../common/FormButton/ButtonForm";
import cn from "classnames";
import { Container, Row, Col } from "react-bootstrap";
import { reduxForm } from "redux-form";
import { createField, Input } from "../../common/formsControls/FormsControls";
import { required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Ввеите свои емэил
      </label>
      {createField("Email", "email", [required], Input)}
      <label htmlFor="password">
        Пароль
        <a className={f.labelLink} href="">Забыли пароль?</a>
      </label>
      {createField("Password", "password", [required], Input, { type: "password" })}
      <div className={f.checkboxBlock}>
        <label htmlFor="checkbox"> Остаться на сайте </label>
        {createField(null, "rememberMe", [], Input, { type: "checkbox" })}
      </div>
      {captchaUrl && <img src={captchaUrl}/>}
      {captchaUrl &&
      createField("Symbols from image", "captcha", [required], Input, {})}
      {error && <div className={s.formSummaryError}>
        {error}
      </div>
      }
      <ButtonForm name={"воитй"}/>
    </form>
  );
};
const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const LoginPage = (props) => {

  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
  };
  if (props.isAuth) {
    return <Redirect to={"/forum"}/>;
  }
  return (
    <div className="page-wrapper">
      <div className={f.formWrap}>
        <Container>
          <Row>
            <Col md={{ span: 7, offset: 2 }}>
              <div className={f.heading}>
                <h3 className={f.subtitle}>stoma.md</h3>
                <h3 className={f.title}>Войдите на сайт </h3>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 7, offset: 2 }}>
              <div className={cn(f.authForm, f.pd)}>
                <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 7, offset: 2 }}>
              <p className={f.registrationLink}>
                Вы новый пользователь? <br/>
                <a href={"/registration"}>Зарегистрируйтесь.</a>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {})(LoginPage);
