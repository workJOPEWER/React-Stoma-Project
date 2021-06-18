import React from "react";
import s from "./requisites.module.scss";
import { connect } from "react-redux";
import HelpUsInfoBlock from "./helpUsInfoBlock";
import RequisitesBlock from "./requisitesBlock";

const RequisitesPage = (props) => {
  return (
      <div className={s.wrap}>
        <RequisitesBlock requisites={props.requisites} />
        <div className={s.heading}>
          <h2>{props.moneyTitle}</h2>
        </div>
        <HelpUsInfoBlock />
      </div>
  );
};
const mapStateToProps = (state) => {
  return {
    requisites: state.contacts.donate.requisites,
    moneyTitle: state.contacts.donate.moneyTitle,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect (mapStateToProps, mapDispatchToProps)(RequisitesPage);