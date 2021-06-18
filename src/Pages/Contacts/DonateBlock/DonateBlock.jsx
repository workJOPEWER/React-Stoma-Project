import React from 'react';
import s from './DonateBlock.module.scss';
import {Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import PillsTabs from "./PillsTabs/PillsTabs";


const DonateBlock = (props) => {

  return(
    <div>
      <Row>
        <Col>
          <div className={s.infoPart}>
            <div className={s.heading}>
              <h2>{props.donateTitle}</h2>
            </div>
            <PillsTabs titles={props.tabTitles} disabled={props.disabled}/>
          </div>
        </Col>
      </Row>
    </div>
  )
}


let mapStateToProps =(state) => {
  return {
    donateTitle: state.contacts.donate.donateTitle,
    tabTitles: state.contacts.donate.tabTitles,
    disabled: state.contacts.donate.disabled
  };
};

export default connect(mapStateToProps, {})(DonateBlock);
