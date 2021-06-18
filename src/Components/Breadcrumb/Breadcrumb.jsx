import React from 'react';
import s from './Breadcrumb.module.scss';
import {Col, Breadcrumb} from 'react-bootstrap';



const Breadcrumbs = (props) => {
  return(
      <div className={s.breadcrumb}>
        <Breadcrumb>
          <Breadcrumb.Item  active href="/home">Главная</Breadcrumb.Item>
          <Breadcrumb.Item active href="/forum">
            Форум
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Темы</Breadcrumb.Item>
        </Breadcrumb>
      </div>
  )
}
export default Breadcrumbs;