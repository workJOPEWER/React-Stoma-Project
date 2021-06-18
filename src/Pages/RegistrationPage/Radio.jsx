import React from 'react';
import { Field } from 'redux-form';
import f from './Registration.module.scss';

const Radio =(props) => {

  if (props && props.input && props.options) {

    const renderRadioButtons = (key, index) => {
      return (
        <label key={`${index}`} htmlFor={`${props.input.name}-${index}`}>
          <Field
            id={`${props.input.name}`}
            component="input"
            name={props.input.name}
            type="radio"
            value={key}
            className={f.ms2}
          />
          {props.options[key]}
        </label>
      )
    };
    return (
      <div>
        <div className="labeRadiolStyle">
          {props.label}
        </div>
        <div>
          {props.options &&
          Object.keys(props.options).map(renderRadioButtons)}
        </div>
      </div>
    );
  }
}

export default Radio;