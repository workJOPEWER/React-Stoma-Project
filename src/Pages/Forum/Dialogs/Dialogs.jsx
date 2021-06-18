import React from "react";
import f from "./Dialogs.module.scss";
import { Table, Form, Button } from "react-bootstrap";
import UserInfo from "../../../Components/Forum/ProfileInfo/UserInfo";
import Dialog from "../../../Components/Forum/Dialog/Dialogs";
import THeadDialogs from "../../../Components/Forum/TableHead/THeadDialogs";
import { Field, reduxForm } from 'redux-form';
import { Textarea } from "../../../common/formsControls/FormsControls";
import { required } from "../../../utils/validators/validators";
import ButtonForm from "../../../common/FormButton/ButtonForm";



const Dialogs = (props) => {

  let dialogsElements = props.table.map(t =>
    <THeadDialogs name={t.name} key={t.id} title={t.title} categName={t.categName} category={t.category}/>);
  let messageElement = props.messages.map(m => <Dialog key={m.id} message={m.message} name={m.name} data={m.data}/>);
  let newMessageBody = props.newMessageBody;

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  }

  return (
    <div className={f.bodyBlock}>
      <div className="table-responsive">
        <Table bordered size="sm">
          {dialogsElements}
          {messageElement}
        </Table>
      </div>
      {/*PAGINATION*/}
      <div className="table-responsive">
        <Table bordered size="sm">
          <tbody>
          <tr>
            <td>
              <UserInfo/>
              <div className={f.dialogMessageForm}>
              <AddMessageFormRedux onSubmit={addNewMessage}/>
              </div>
            </td>
          </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};
export default Dialogs;

const AddMessageForm = (props) => {
  return(
    <form onSubmit={props.handleSubmit}>
      <div className={f.messageWrap}>
        <Field component={Textarea} validate={[required]} name="newMessageBody" placeholder="Enter your message"/>
      </div>
      <div className={f.send}>
        <ButtonForm  name={"отправить"}>отправить</ButtonForm>
      </div>
    </form>
  )
}
const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)
