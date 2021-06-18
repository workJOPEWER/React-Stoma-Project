import React from "react";
import { Row } from "react-bootstrap";
import "./Themes.scss";
import ThemeItem from "../Themes/ThemeItem";
import Headings from "../../../Components/Headings/Body/Headings";

const Themes = (props) => {
  let themesElements = props.themes
    .map(t => <ThemeItem title={t.title} key={t.id} link={t.link}
                         descr={t.descr} imgUrl={t.imgUrl}
    />);

  return (
    <div className="projects_wrap" id={"content"}>
      <div className="container">
        <Headings heading={props.heading}/>
        <div className="themes_list">
          <Row md={12}>
            {themesElements}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Themes;