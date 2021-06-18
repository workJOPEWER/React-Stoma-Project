import React from 'react';
import i from './ImagesBlock.module.scss';
import {Row, Col} from 'react-bootstrap';
import Stoma from "../../assets/stoma.jpg";


const ImagesBlock = () => {
  return(
    <div className={i.imagesBlock}>
      <Row >
        <Col xs={4}>
          <a href="#">
            <div className={i.imageItem}>
              <img src={Stoma} alt=""/>
            </div>
          </a>
        </Col>
        <Col xs={4}>
          <a href="#">
            <div className={i.imageItem}>
              <img src={Stoma} alt=""/>
            </div>
          </a>
        </Col>
        <Col xs={4}>
          <a href="#">
            <div className={i.imageItem}>
              <img src={Stoma} alt=""/>
            </div>
          </a>
        </Col>
      </Row>
    </div>
  )
}
export default ImagesBlock;