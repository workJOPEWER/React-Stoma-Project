import React, {Component} from 'react';
import { Button} from 'react-bootstrap';
import './Buttons.scss';


const BtnSubmit =() =>{

  let onSendMessage = () => {
    alert('privet');
  }

  return(
    <Button onClick={onSendMessage} className="btnSubmit" as="input" type="submit" value="отправить" aria-pressed="true"/>
  )
}

export default BtnSubmit;