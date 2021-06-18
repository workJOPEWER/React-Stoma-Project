import React, { Component } from "react";
import './MenuButton.scss';
import {Button} from 'react-bootstrap';



class MenuButton extends Component {
  render(){
    return(
      <div className="menu">
        <Button className="cust_btn" id="btnMenu"
                onMouseUp={this.props.handleMouseDown}>
          <span>меню</span>
        </Button>

      </div>
    );
  }
}

export default MenuButton;