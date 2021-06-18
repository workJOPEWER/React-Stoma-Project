import React from "react";
import s from "./ContactLinks.module.scss";
import { NavLink, useRouteMatch } from "react-router-dom";
import { Nav } from "react-bootstrap";

const ContactLinks = (props) => {

  let { url } = useRouteMatch();

  return (
    <Nav justify variant="tabs" defaultActiveKey={`${url}/info`}>
      <Nav.Item>
        <NavLink to={`${url}/info`} className="nav-link" eventKey="link-1">
          <span className={s.linkTitle}>контакты</span>
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to={`${url}/donate`} className="nav-link" eventKey="link-2">
          <span className={s.linkTitle}>поддержка</span>
        </NavLink>
      </Nav.Item>
    </Nav>
  );
};

export default ContactLinks;
