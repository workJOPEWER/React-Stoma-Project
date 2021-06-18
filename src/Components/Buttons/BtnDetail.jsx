import React from "react";
import "./Buttons.scss";
import { Button } from "react-bootstrap";
import { useHistory} from "react-router-dom";
import {Animated} from "react-animated-css";


const BtnDetail = (props) => {
  let name = "узнать больше";
  let history = useHistory();

  function handleClick() {
    history.push(props.link);
  }

  return (
    <Animated animationIn="fadeIn" animationOut="pulse" animationInDuration={2000} animationOutDuration={800} isVisible={true}>
    <Button onClick={handleClick} className="btn_detail">{name}</Button>
    </Animated>
  );
};

export default BtnDetail;
