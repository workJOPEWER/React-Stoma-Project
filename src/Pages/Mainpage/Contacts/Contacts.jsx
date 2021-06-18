import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Contacts.scss";
import Headings from "../../../Components/Headings/Body/Headings";
import SocialButtons from "../../../Components/SocialButtons/SocialButtons";
import ContactsInfo from "../../../Components/ContactsInfo/ContactsInfo";
import ContactForm from "../../../Components/ContactForm/ContactForm";

const Contacts = (props) => {

  return (
    <div className="contacts_wrap">
      <div className="contact_form">
        <div className="container_wide">
          <div className="container">
            <div className="heading-block">
              <Headings heading={props.heading}/>
            </div>
            <Row>
              <Col xs={12} lg={4}>
                <div className="contact_info">
                  <ContactsInfo info={props.info}/>
                  <SocialButtons/>
                </div>
              </Col>
              <Col lg={8}>
                <ContactForm/>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
