import React from "react";
import s from "./Mistake.module.scss";
import { useLocation } from "react-router-dom";

const Mistake = () => {

  let location = useLocation();

  return (
    <div className={s.center}>
      <div className={s.content}>
        <h1>404</h1>
        <p> Извините, но страницы {location.pathname} не существует! <br/>
          Вы уверенны. что правильно ввели адрес страницы!?<br/>
        Попробуйте еще разок!!!</p>
      </div>
    </div>
  );
};

export default Mistake;