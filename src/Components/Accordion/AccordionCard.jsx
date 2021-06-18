import React, { useState } from "react";
import i from "./Accordion.module.scss";
import { Accordion, Card } from "react-bootstrap";
import AccordionCollapse from "./AccordionCollapse";

const AccordionCard = ({ cards }) => {
  /** @namespace c.slug */

  let [show, setShow] = useState(`show`);

  return (

    <div>
      {cards.map(c =>
        <Card className={i.card} key={c.id}>
          <Accordion.Toggle as={Card.Header} className={i.cardHeader}
                            eventKey={c.position}>
            {c.name}
          </Accordion.Toggle>

          <Accordion.Collapse eventKey={c.position} className={`switch ${show}`}>
            <Card.Body>
              <AccordionCollapse posts={c.posts} slug={c.slug}/>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      )}
    </div>
  );
};

export default AccordionCard;
