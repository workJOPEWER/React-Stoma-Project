import React from "react";
import { Accordion } from "react-bootstrap";
import { useRouteMatch } from "react-router-dom";
import InfoAccordionCardContainer from "../../Containers/InfoAccordionCardContainer";
import AboutAccordionCardContainer from "../../Containers/AboutAccordionCardContainer";

const AccordionBlock = (props) => {

  let {url} = useRouteMatch();

  return (
    <>
      { `${url}` === "/about" ? <Accordion>
         <AboutAccordionCardContainer/>
      </Accordion> : <Accordion><InfoAccordionCardContainer/></Accordion>
      }
    </>
  );

};

export default AccordionBlock;
