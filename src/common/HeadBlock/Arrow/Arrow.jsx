import React from "react";
import s from "./Arrow.module.scss";
import { HashLink as Link } from 'react-router-hash-link';

const Arrow = (props) => {
  if (window.location.pathname === '/forum') return null;

  return (
    <Link to={"#content"}>
      <div className={s.arrow}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Link>

  );
};
export default Arrow;
