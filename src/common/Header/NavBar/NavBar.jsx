import React from "react";
import { Navbar } from "react-bootstrap";
import "./NavBar.scss";
import Logo from "../../../Components/Logo/Logo";
import Heart from "../../HeartBeet/HeartBeet.jsx";
import ContainerMenu from "./ResponMenu/ContainerMenu";

const NavBar = (props) => {

    return (
    <Navbar>
      <Logo />
      <div className="text-right">
        <Heart />
        <ContainerMenu />
      </div>
    </Navbar>
  );
};
export default NavBar;


