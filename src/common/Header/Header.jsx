import React, { useEffect, useState } from "react";
import "./Header.scss";
import NavBar from "./NavBar/NavBar";

const Header = (props) => {

  const [show, handleShow] = useState(false);

  const onScroll = e => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else handleShow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll, true);
    return window.removeEventListener("scroll", onScroll, false);
  }, [onScroll]);

  return (

    <div className={`header ${show && "header active"}`}>
      <div className="container_wide">
        <NavBar/>
      </div>
    </div>
  );
};

export default Header;
