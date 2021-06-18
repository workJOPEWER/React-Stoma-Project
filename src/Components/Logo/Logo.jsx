import React from "react";
import s from "./Logo.module.scss";
import Lives from "../../assets/lives.svg";
import { NavLink } from "react-router-dom";


const Logo = () => {
  return (
    <strong className="logo">
      <NavLink to={"/home"} className={s.logoLink}>
        <img className={s.logoImg} src={Lives} alt="aopsrm"/>
        <span>AOPS</span>
      </NavLink>
    </strong>
  );
};

export default Logo;