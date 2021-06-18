import React, { Component } from "react";
import "./MenuToogle.scss";
import Navlink from '../Navlink/Navlink';

class MenuToogle extends Component {
  render() {
    let visibility = "hide";

    if (this.props.menuVisibility) {
      visibility = "show";
    }

    return (
      <div id="flyoutMenu"
           onMouseUp={this.props.handleMouseDown}
           className={visibility}>
        <div className="main-menu">
          <div className="container_wide">
            <div className="mm-holder">
              <div className="mm-wrap">
                <div className="mm-inner">

                  <Navlink />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default MenuToogle;