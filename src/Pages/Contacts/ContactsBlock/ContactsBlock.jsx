import React from 'react';
import s from './ContactsBlock.module.scss';
import {Row, Col} from 'react-bootstrap';
import ContactForm from "../../../Components/ContactForm/ContactForm";
import ContactsInfo from "../../../Components/ContactsInfo/ContactsInfo";
import { connect } from "react-redux";


const ContactsBlock = (props) => {
  return(
    <div>
      <Row>
        <Col >
          <div className={s.infoPart}>
            <ContactsInfo info={props.contacts}/>
          </div>
        </Col>
      </Row>
      <Row>
        <div className={s.contactForm}>
          <div className={s.heading}>
            <h2>{props.heading}</h2>
          </div>
          <div className={s.containerForm}>
            <ContactForm/>
          </div>
        </div>
      </Row>
    </div>
  )
}

let mapStateToProps =(state) => {
  return {
    contacts: state.contacts.contacts.info,
    heading: state.contacts.heading
  };
};

export default connect(mapStateToProps, {})(ContactsBlock);
