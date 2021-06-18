import React from "react";
import s from "./NewsNavLinks.module.scss";
import { NavLink, useRouteMatch } from "react-router-dom";
import { Nav } from "react-bootstrap";

const NewsNavLinks = (props) => {

  let { url } = useRouteMatch();

  return (
    <Nav justify variant="tabs">
      <Nav.Item>
        <NavLink to={`${url}/news`} className="nav-link" eventKey="link-1">
          <span className={s.linkTitle}>новости</span>
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to={`${url}/article`} className="nav-link" eventKey="link-2">
          <span className={s.linkTitle}>статьи</span>
        </NavLink>
      </Nav.Item>
    </Nav>
  );
};

export default NewsNavLinks;
