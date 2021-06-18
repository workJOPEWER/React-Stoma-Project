import React from "react";
import TitleComponent from "../common/TitleComponent";

export const withTitle = ({ ChildComponent, title, description, keywords }) => (props) => (
  <>
    <TitleComponent title={title} description={description} keywords={keywords}/>
    <ChildComponent {...props} />
  </>
);
