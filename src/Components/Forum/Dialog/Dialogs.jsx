import React from "react";
import f from "./Dialog.module.scss";
import UserInfo from "../ProfileInfo/UserInfo";


const Dialog = (props) => {

  return (
    <tbody>
      <tr>
        <td className={f.flex}>
          <div className={f.userBlock}>
            <UserInfo />
          </div>
          <div className={f.textPost}>
            <p>{props.message}</p>
          </div>
          <div className={f.footer}>
            <div className={f.data}>
              {props.name}
              <span> {props.data}</span>
            </div>
            <div className={f.answer}>
              <a href="#">ответить</a>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default Dialog;