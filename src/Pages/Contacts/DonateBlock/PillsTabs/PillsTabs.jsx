import React from 'react';
import s from './PillsTabs.module.scss';
import {Tabs, Tab} from 'react-bootstrap';
import RequisitesPageContainer from '../requisites/requisitesPage';


const PillsTabs = (props) => {
  return(
      <Tabs variant="pills"  transition={false}
            fill defaultActiveKey="first" id="pillsTab">
        <Tab eventKey="first" title={props.titles.f}>
          <RequisitesPageContainer />
        </Tab>
        <Tab eventKey="second"  title={props.titles.s} disabled={props.disabled}>
        </Tab>
        <Tab eventKey="third"  title={props.titles.t} disabled={props.disabled}>
        </Tab>
      </Tabs>
  )
}
export default PillsTabs;