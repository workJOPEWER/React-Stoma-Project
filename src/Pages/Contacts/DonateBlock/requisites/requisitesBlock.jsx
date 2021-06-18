import React from "react";
import s from "./requisites.module.scss";
import { Container, Row, Col } from "react-bootstrap";

const RequisitesBlock = (props) => {
  return (
      <div className={s.wrap}>
        {
          props.requisites.map(r => <div key={r.id} className={s.requisBlock}>
            <Container>
              <Row>
                <Col md={{ span: 10, offset: 1 }}>
                  <div className={s.requisites}>
               <span>
                <h5>{r.bank}</h5>
                <h6>{r.swiftName}</h6>
                <h5>{r.swift}</h5>
                <h6>{r.contName} <h5>{r.cont}</h5></h6>
                <h6>{r.beneficiarName} <h5>{r.beneficiar}</h5></h6>
                <h6>{r.codName} <h5>{r.cod}</h5></h6>
                <h6>{r.adresaName} <h6>{r.adresa}</h6></h6>
               </span>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>)
        }
      </div>
  );
};

export default RequisitesBlock;