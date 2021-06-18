import React from "react";
import f from "./ButtonForm.module.scss";
import { Button } from "react-bootstrap/esm/index";
import styled from "styled-components";

const BootstrapButton = styled.button`
 text-align: center;
 margin-top: 10px;
 margin-button: 10px;
 padding: "22px 45px";
 font-family: "Source Sans Pro", sans-serif;
 background-color: #28B0B7;
 color: #f6f6f6;
 font-size: 12px;
 text-transform: uppercase;
 letter-spacing: 0.2em;
 border: none;
 width: 15.5em;
 height: 4em;
 box-shadow: 0 10px 33px 0 lightgrey;
  @media only screen and (min-width: 480px){
  width: 10em;}
   @media only screen and (min-width: 320px){
  width: 10em;}

  `;


const ButtonForm = (props) => {
  return (
    <div className={f.button}>
      <BootstrapButton as={Button} variant="primary" type="submit">{props.name}</BootstrapButton>
    </div>
  );
};

export default ButtonForm;