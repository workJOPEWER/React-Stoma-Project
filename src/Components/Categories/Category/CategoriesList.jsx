import React from "react";
import s from "./CategoriesList.module.scss";
import { Col } from "react-bootstrap";
import { NavLink, useRouteMatch } from "react-router-dom";


const CategoriesList = ({categoryName }) => {

  let {url} = useRouteMatch();

  return (

    <Col>
      <div>
        {
          categoryName.map((cat) =>
            <div className={s.categoryList} key={cat.slug}>
              <div className={s.categoryItem}>
                <h5 className={s.linkStyle}>
                <NavLink to={`${url}/category/${cat.slug}`}
                         activeStyle={{ color: "#28B0B7", fontWeight: "600"}}>
                  {cat.name}
                </NavLink>
                </h5>
              </div>
            </div>
          )
        }
      </div>
    </Col>

  );
};

export default CategoriesList;