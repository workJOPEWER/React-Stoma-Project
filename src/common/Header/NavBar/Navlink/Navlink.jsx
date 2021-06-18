import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import s from "./Navlink.module.scss";
import cn from "classnames";
import Language from "../../LanguageList/LangList";

const Navlink = (props) => {

  return (

    <Nav defaultActiveKey="/">
      <div className={cn(s.formInline, s.closeFloatMenu)}>
        <button className={s.closeBottom}>X</button>
      </div>
      <div className={s.mmList}>

        <div className={s.navLink}>
          <NavLink to="/">главная</NavLink>
        </div>
        <div className={s.navLink}>
          <NavLink to="/about/znakomstvo-s-associaciei/107">о нас</NavLink>
        </div>
        <div className={s.navLink}>
          <NavLink to="/blog/news">новости</NavLink>
        </div>
        <div className={s.navLink}>
          <NavLink to="/info/vse-pro-stomu/110">информация</NavLink>
        </div>
        <div className={s.navLink}>
          <a href="https://forumbb.stoma.md" target="_blank">форум</a>
        </div>
        <div className={s.navLink}>
          <NavLink to="/contacts/info">контакты</NavLink>
        </div>
        {/*<div className="h">*/}
        {/*<Language/>*/}
        {/*</div>*/}
      </div>
      <div>
      </div>
    </Nav>
  );
};

export default Navlink;