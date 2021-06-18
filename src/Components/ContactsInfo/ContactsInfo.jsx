import React from "react";
import s from './ContactsInfo.module.scss'

const ContactsInfo = (props) => {

  const info = props.info;

  return (
        <div>
          {info.map(c => <div key={c.id}>
            <address className={s.mainOffice}>
              <p className={s.companyName}>{c.companyName}</p>
              <p className={s.location}>{c.country} <br/>
                {c.city} <br/>
                {c.street}</p>
            </address>

            <div className={s.contact}>
              <div className={s.contactItem}>
            <span className={s.name}>
              {c.name} </span>
                <div className={s.tel}> {c.tel}</div>
              </div>
              <div className={s.contactItem}>
            <span className={s.name}>
              {c.name2}</span>
                <div className={s.email}>
                  {c.email}</div>
              </div>
            </div>
          </div>)}
        </div>
  );
};

export default ContactsInfo;