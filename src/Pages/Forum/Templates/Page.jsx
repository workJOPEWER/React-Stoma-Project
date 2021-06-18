import React from "react";
import f from "../../__ProfilePage/ProfileInfo/ProfilePage.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import Breadcrumbs from "../../../Components/Breadcrumb/Breadcrumb";
import PageFormData from './PageDataForm';

const Page = (props) => {
  return (
    <div className="page-wrapper">
      <div className={f.profileInfoWrap}>
        <div className={f.usersWrap}>
          <Container>
            <Row>
              <Col md={{ span: 8, offset: 2 }}>
                <div className={f.heading}>
                  <h3 className={f.subtitle}>ваша анкета</h3>
                  <h3 className={f.title}>Сидоров Алексей (ostomy)</h3>
                </div>
              </Col>
            </Row>
            {/**************/}
            <div className={f.infoWrap}>
              <div className={f.breadcrumbs}>
                <Breadcrumbs/>
              </div>
              <PageFormData/>
              <div className={f.moreInfo}>
                <h3 className={f.title}>
                  Внимательно заполняйте данные.
                  Благодаря данным Ассоциация сможет правильно подобрать тс
                </h3>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Page;

// const ProfileData