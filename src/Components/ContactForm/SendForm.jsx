import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import s from "./SendForm.module.scss";
import ButtonForm from "../../common/FormButton/ButtonForm";
import { createField, Input, Textarea } from "../../common/formsControls/FormsControls";
import { reduxForm, Field } from "redux-form";
import PopoverMe from "./Popover";
import { required, email, phoneNumber} from "../../utils/validators/validators";


const SendForm = (props) => {

  return (
    <div className={s.formHolder}>
      <div className={s.sendForm}>
        <Form onSubmit={props.handleSubmit}>
          <Row>
            <Col md={6} xs={12}>
              {createField("Имя", "name", [required], Input, { type: "text" })}
            </Col>
            <Col md={6} xs={12}>
              {createField("Фамилия", "lastname", [required], Input, { type: "lastname" })}
            </Col>
          </Row>
          <Row>
            <Col md={6} xs={12}>
              {/*{createField("Телефон", "phone", [required, phoneNumber, number], Input, { type: "text" })}*/}
              <Field placeholder =" Номер телефона" name="phone"
                     component="input" type="text"
                     normalize={phoneNumber} validate={required} />

            </Col>
            <Col md={6} xs={12}>
              {createField("Емэил", "email", [email], Input, { type: "email" })}
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              {createField("Заголовок", "subject", [required], Input, { type: "subject" })}
            </Col>
            <Col md={12}>
              {createField("Текс сообщения", "message", [required], Textarea, { type: "message" })}
            </Col>
            <Col md={6}>
              <ButtonForm name={"отправить"}/>
            </Col>
            <Col md={6}>
              <PopoverMe/>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};
export default reduxForm({ form: "SendMessageForm" })(SendForm);
