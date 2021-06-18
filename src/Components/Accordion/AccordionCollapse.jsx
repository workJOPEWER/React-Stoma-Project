import React from "react";
import s from "./Accordion.module.scss";
import { NavLink, useRouteMatch, useLocation } from "react-router-dom";

const AccordionCollapse = ({ posts, slug }) => {

  let { url } = useRouteMatch();

  return (
    <div className={s.list}>
      {posts.map(a =>
        <ul key={a.id}>
          <li>
            <NavLink to={`${url}/${slug}/${a.id}`}
                     activeStyle={{ color: "#28B0B7", textDecoration: "none", fontWeight: "600" }}>
              {a.title}
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
};

export default AccordionCollapse;

