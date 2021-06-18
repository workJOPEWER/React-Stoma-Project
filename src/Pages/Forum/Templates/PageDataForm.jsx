import React from 'react'
import f from '../../__ProfilePage/ProfileInfo/ProfilePage.module.scss';
import { reduxForm } from 'redux-form';
import { Row, Col } from 'react-bootstrap';
import { createField, Input, Textarea } from '../../../common/formsControls/FormsControls';
import ButtonForm from '../../../common/FormButton/ButtonForm';
import Logo from '../../../assets/loader.gif';
import { required } from "../../../utils/validators/validators";


const PageFormData = ({handleSubmit}) => {
  return(
    <form onSubmit={handleSubmit}>
      <Row>
        <Col md={{ span: 4, offset: 1 }}>
          <div className={f.avatar}>
            <img src={Logo} alt=""/>
          </div>
          <div className={f.uploadPhoto}>
            <input type="file"/>
          </div>
          <div className={f.contactsInfo}>
            <h3 className={f.title}>контакты</h3>

            {createField("почта", "email", [required], Input)}
            {createField  ("Номер телефона", "phone", [required], Input, { type: "text" })}

            <div className={f.updateInfo}>
              <b>Данные были изменены !!!</b>
            </div>
            <div className={f.button}>
              <ButtonForm name={"изменить данные"}/>
            </div>
            <div className={f.linkMind}>
              <a href="">я забыл свой пароль?</a>
            </div>
            <div className={f.blockDescription}>
              <h5> дополнительное инфо <b className={f.red}>*</b></h5>
              <p> ТС - технические средства</p>
            </div>

          </div>
        </Col>
        <Col md={7}>
          <div className={f.personalInfo}>
            <h3 className={f.title}
                alt="Данную информацию видят зарегистрированные пользователи.">
              открытое инфо</h3>
            {createField("Фамилия", "firstName", [required], Input, { type: "text" })}
            {createField("Имя", "name", [required], Input, { type: "text" })}
            {createField("дата рождения", "birth", [required], Input, { type: "text" })}
            {createField("город проживания", "city", [required], Input, { type: "text" })}
            {createField("статус", "status", [], Input, { type: "text" })}
            {createField("о себе", "about", [], Textarea, { type: "text" })}
            <div>
              <h3 className={f.title} alt="Данная информация нужна для статистики">конфиденциально</h3>
            </div>

            <div className={f.select}>
              <label htmlFor="select"><h3 style={{ float: "left" }}>тип стомы</h3></label>
              <select>
                <option value="chouse">выбрать</option>
                <option value="colostoma">colostoma</option>
                <option value="urostomy">urostomy</option>
                <option value="iliostomy">iliostomy</option>
                <option value="traheostomy">трахеостома</option>
                <option value="tistoma">цистома</option>
                <option value="gastrostomy">гастростома</option>
              </select>
            </div>
              {createField("диаметр", "diametr", [], Input)}
              {createField("вид стомы: выпуклая/ втянутая/ плоская", "view", [], Input, { type: "text" })}
              {createField("предпочтение в ТС*", "prefer", [], Input, { type: "text" })}
          </div>
        </Col>
      </Row>
    </form>
  )
}
export default reduxForm({ form: 'edit_profile'})(PageFormData)
