import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Footer from "../../../common/Footer/Footer";

export const MainTemplate = ({ footer, children }) => (

  <MainContainer>
    {children}
    {footer && <Footer>{footer}</Footer>}
  </MainContainer>
);

MainTemplate.propTypes = {
  footer: PropTypes.node,
  children: PropTypes.node.isRequired
};

MainTemplate.defaultProps = {
  footer: null
};

const MainContainer = styled.div`
  position: relative;
  display: block;
`;