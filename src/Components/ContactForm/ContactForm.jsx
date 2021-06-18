import React, { useState } from "react";
import s from "./SendForm.module.scss";
import { connect } from "react-redux";
import { email } from "../../redux/sendForm-reducer";
import SendReduxForm from "../../Components/ContactForm/SendForm";
import FormSuccess from "./FormSuccess";


const ContactForm = (props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (formData) => {
    props.email(formData.name, formData.lastname, formData.phone,
      formData.email, formData.subject, formData.message);
    setIsSubmitted(true);
  };

  return (
    <div className={s.formHolder}>
      <div className={s.sendForm}>
        {!isSubmitted ? (
          <SendReduxForm onSubmit={onSubmit}/>
        ) : (
          <FormSuccess/>
        )}
      </div>
    </div>
  );
};
export default connect(null, { email })(ContactForm);
