import React, { Component } from "react";
import MenuButton from "../MenuBtn/MenuButton";
import MenuToogle from "./MenuToogle";

class ContainerMenu extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      visible: false
    };

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  handleMouseDown(e) {
    this.toggleMenu();

    console.log("clicked");
    e.stopPropagation();
  }

  toggleMenu() {
    this.setState(
      {
        visible: !this.state.visible
      }
    );
  }

  render() {
    return (
      <div>
        <MenuButton handleMouseDown={this.handleMouseDown}/>
        <MenuToogle handleMouseDown={this.handleMouseDown}
                    menuVisibility={this.state.visible}/>
      </div>
    );
  }
}

export default ContainerMenu;