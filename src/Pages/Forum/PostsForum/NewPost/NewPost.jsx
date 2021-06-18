import React from "react";
import f from "./NewPost.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../../utils/validators/validators";
import { Textarea } from "../../../../common/formsControls/FormsControls";
import { createField, Input } from "../../../../common/formsControls/FormsControls";
import ButtonForm from "../../../../common/FormButton/ButtonForm";


const NewPostPage = (props) => {

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };
  return (
    <div className="page-wrapper">
      <div className={f.formWrap}>
        <Container>
          <Row>
            <Col md={{ span: 7, offset: 2 }}>
              <div className={f.heading}>
                <h3 className={f.subtitle}>Уверенны, что такой темы нет?</h3>
                <h3 className={f.title}>Создайте новую тему </h3>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 7, offset: 2 }}>
              <AddNewPostFormRedux onSubmit={onAddPost}/>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
  return (
    <div className={f.registrationForm}>
      <form onSubmit={props.handleSubmit}>
          {createField("заголовок темы", "newPostTitle", [required, maxLength10], Input, { type: "text" })}
          {createField("введите текст темы", "newPostText", [required, maxLength10], Textarea, { type: "text" })}
        <div className={f.send}>
          <ButtonForm name={"создать"}/>
        </div>
      </form>
    </div>
  );
};
const AddNewPostFormRedux = reduxForm({ form: "postAddMessageForm" })(AddNewPostForm);

export default NewPostPage;
