import React from "react";
import f from "./Registration.module.scss";
import { reduxForm, Field } from "redux-form";
import Radio from "./Radio";
import ButtonForm from "../../common/FormButton/ButtonForm";
import { createField, Input } from "../../common/formsControls/FormsControls";
import { required } from "../../utils/validators/validators";
// import phoneNumber from "../../utils/validators/example";

const digitsNumber = value =>
  value && !/^(0|[1-9][0-9]{8})$/i.test(value)
    ? "Invalid phone number, must be 9 digits"
    : undefined;

const phoneNumber = (value) => {
  if (!value) return value;
  const numberValue = value.replace(/[^\d]/g, ''); // only allows 0-9
  if (numberValue.length <= 3) return numberValue;
  if (numberValue.length <= 6) return `(${numberValue.slice(0, 3)}) ${numberValue.slice(3)}`;
  return `(${numberValue.slice(0, 3)}) ${numberValue.slice(3, 6)}-${numberValue.slice(6, 10)}`;

};

const RegistrationForm = ({ handleSubmit, radioChanged, options, ...props}) => {

  return (
    <div className={f.registrationForm}>
      <form onSubmit={handleSubmit}>
        {createField("Фамилия", "firstName", [required], Input, { type: "text" })}
        {createField("Имя Отчество", "lastName", [required], Input, { type: "text" })}
        {createField  ("Номер телефона", "phone", [required, digitsNumber, phoneNumber], Input, { type: "text" })}
        {/*<Field placeholder =" Номер телефона" name="phone" component="input" type="text"  normalize={phoneNumber}/>*/}
        {createField("Емэил", "email", [required ], Input, { type: "email" })}
        {createField("Пароль", "password", [required], Input, { type: "password" })}
        <div>
          <div className={f.radioChoice}>
            <label className={f.descrTitle}>Выбери один из вариантов</label>
            <label>
              <Field name={"choice"} component={Radio} type={"radio"} onChange={radioChanged}
                     options={options}/>
            </label>
          </div>
        </div>
        <ButtonForm name={"создать аккаунт"}/>
      </form>
    </div>
  );
};
export default reduxForm({ form: "registration" })(RegistrationForm);


