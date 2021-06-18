import React from "react";
import f from "./FormsControls.module.scss";
import { Field } from "redux-form";

const FormControl = ({ input, meta: { touched, error }, children }) => {
  const hasError = touched && error;
  return (
    <div className={f.formControl + " " + (hasError ? f.error : "")}>
      <div>
        {children}
      </div>
      {hasError && <span>{error}</span>}
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, child, ...restProps } = props;
  return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>;
};

//Select for registration form
export const Select = (props) => {

  const renderSelectOptions = (key, index) => {
    return (
      <option
        key={`${index}-${key}`}
        value={key}>

        {props.options[key]}
      </option>
    );
  };

  if (props && props.options) {
    return (
      <div className={f.selectType}>
        <label htmlFor="select"><h3 style={{ float: "left" }}>тип стомы</h3></label>
        <select {...props.input} >
          {Object.keys(props.options).map(renderSelectOptions)}
        </select>
      </div>
    );
  }
};

export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;
  return <FormControl {...props}><input {...input} {...restProps} /></FormControl>;
};

export const createField =
  (placeholder, name, validators, component, props = {}, text = "") => (
    <div className={f.field}>
      <Field placeholder={placeholder}
             name={name}
             validate={validators}
             component={component}
             {...props}
      /> {text}
    </div>
  );
