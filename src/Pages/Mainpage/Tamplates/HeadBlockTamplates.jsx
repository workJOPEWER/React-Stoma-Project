import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import HeadBlock from "../../../common/HeadBlock/HeadBlock";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";

export const HeadBlockTemplate = ({ headBlock, children }) => {
  const headTitle = useSelector(state => state.headBlock.home);

  return (
    <MainContainer>
      {headBlock && <HeadBlock headTitle={headTitle}>{headBlock}</HeadBlock>}
      <Container>
        <Child>
          {children}
        </Child>
      </Container>
    </MainContainer>
  );
};

HeadBlockTemplate.propTypes = {
  headBlock: PropTypes.node,
  children: PropTypes.node.isRequired
};

HeadBlockTemplate.defaultProps = {
  headBlock: <HeadBlock/>
};

const MainContainer = styled.div`
  position: relative;
  display: block;
  width:100%;
  
  @media only screen and (max-width: 768px) {
    min-height: 450px;
  }
  @media only screen and (max-width: 480px) {
    min-height: 220px;
   }
`;

const Child = styled.div`
  position: relative;
  top: -4.6em;
  z-index: 10;
  
  @media only screen and (max-width: 1459.98px){
  
  
  }
  
  @media only screen and (max-width: 1199.98px){
  top: -13em;
  }

  @media only screen and (max-width: 991.98px) {
  
  }

  @media only screen and (max-width: 768px){
  
  top: -7em;
  }

  @media only screen and (max-width: 480px) {
    text-align: center;
    width: 100%;
    top: -3.5em;

  }
  @media only screen and (max-width: 360px){
    top: -3.5em;
   }

   @media only screen and (min-width: 1460px) {
   top: -13em;
   }

   @media only screen and (min-width: 992px) {
   top: -13em;
   }

   @media only screen and (min-width: 1200px){}
   
   @media only screen and (min-width: 768px){
  }
   
   @media only screen and (min-width: 576px) {
   }
   
   @media only screen and (min-width: 320px){
   }
`;


