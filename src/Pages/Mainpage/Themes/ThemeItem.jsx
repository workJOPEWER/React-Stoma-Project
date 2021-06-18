import React from "react";
import { Col } from "react-bootstrap";
import "./ThemeItem.scss";
import {useHistory} from 'react-router-dom';

const ThemeItem = (props) => {
  let history = useHistory();

  function handleClick(){
     if(props.title === "форум"){
       window.open('https://forumbb.stoma.md', '_blank');
     }else {
       history.push(props.link)
     }
  }
  return (

    <Col lg={4} md={6} xs={12} className="themes_item">
      <a className="theme_item" onClick={handleClick} target="_blank">
        <div className="themes_item_bg">
          <img src={props.imgUrl} alt=""/>
        </div>
        <div className="title">
          <span className="item_title">{props.title}</span>
          <div className="desc_block">
            <div className="item_desc">
              <p className="desc_text">{props.descr}</p>
            </div>
          </div>
        </div>
      </a>
    </Col>

  );
};

export default ThemeItem;