import React from "react";
import f from "./Dialogs.module.scss";
import DialogsContainer from "./DialogsContainer";
import { BlockCommonContentTemplate } from "../Templates/Forum/BlockCommonContent";


const DialogsPage = (props) => {

  return (
    <div className="page-wrapper">
      <BlockCommonContentTemplate>
        <DialogsContainer/>
      </BlockCommonContentTemplate>
    </div>
  );
};

export default DialogsPage;
