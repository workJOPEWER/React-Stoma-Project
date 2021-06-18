import React from "react";
import s from "./SendForm.module.scss";

const FormSuccess = () => {
  return (
    <div className={s.formContentRight}>
      <div className={s.imgHolder}>
        <img className={s.formImg} src='https://stoma.md/images/Logo.jpg' alt='success-image'/>
      </div>
      <h1 className={s.formSuccess}>ВАШЕ ПИСЬМО УСПЕШНО ОТПРАВЛЕНО!!!</h1>
    </div>
  );
};

export default FormSuccess;