import React from "react";
import { connect } from "react-redux";
import SingUp from "../../Components/Forum/NavForum/SingUp";

class HeaderLoginContainer extends React.Component {
  render() {
    return <SingUp {...this.props}/>;
  }
}

const mapStateToProps = (state) => {
  return {}
};

export default connect(mapStateToProps, {})(HeaderLoginContainer);
