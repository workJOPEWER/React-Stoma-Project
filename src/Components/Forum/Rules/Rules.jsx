import React from 'react';
import f from './Rules.module.scss';
import Info from "../../../Components/Icons/forum/info";
import Rule from "../../../Components/Icons/forum/rule";
import Headings from "../../Headings/Body/Headings";
import { Col, Row} from "react-bootstrap";


const Rules = (props) => {
  return(
    <div className={f.upBlock}>
      <Row>
        <Col md={5}>
          <Headings heading={props.headings} />
        </Col>
        <Col>
          <div className={f.rulesForum}>
            <a href="" alt="правила форума">
              <Rule width={80} height={80}/></a>
            <a className={f.information} href="" alt="как использовать форум">
              <Info width={80} height={80}/>
            </a>
          </div>
        </Col>
      </Row>
    </div>

  )
}

export default Rules;