import React from 'react'
import f from './NavForum.module.scss'
import {Row, Col, Container} from 'react-bootstrap'
import Mail from '../../Icons/mail'
import Hands from '../../../assets/stoma.jpg'
import {NavLink} from 'react-router-dom'

const SingUp =(props) => {
  return (
    <div className={f.headBlock}>
    <Container>
      <div className={f.menuWrap}>
        <Row>
          <Col lg={6} md={7} xs={6}>
            <div className={f.salut + ' ' + f.salutLogin}>
              Здравствуй, {props.login}!
            </div>
          </Col>
          <Col lg={6} md={5} xs={6}>
            <div className={f.detailsBlock}>
                <span className={f.hr}>
                  <Mail  width={40} height={40}/>
                </span>
              <details className={f.detailsOverlay}>
                <summary>
                  <div className={f.avatar}><img  className={f.avatarUser} src={Hands} style={{width:"50px"}} /></div>
                  <span className={f.dropDownCaret}> </span>
                </summary>
                <details-menu className={f.dropDownMenu} role="menu">
                  <div className={f.dropMenuStyle}>
                    <div className={f.dropDownItem} role="menuitem">
                      <NavLink to={"/profile"}>мои профиль</NavLink>
                    </div>
                    <a onClick={props.logout} className={f.dropDownItem} href="#" role="menuitem">выйти</a>
                  </div>
                </details-menu>
              </details>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
    </div>
  )
}

export default SingUp;
