import React from "react";
import "./HearBeet.scss";
import { NavLink } from "react-router-dom";

const Heart = () => {
  return (
    <NavLink to={"/contacts/donate"}>
      <div className="heart_beet">
        <div className="heart">
        </div>
      </div>
    </NavLink>

  );
};

export default Heart;