import React from "react";
import "./AboutMainPage.scss";
import BtnDetail from "../../../Components/Buttons/BtnDetail";
import Headings from "../../../Components/Headings/Body/Headings";
import AnimationImage from "../../../Components/AnimationImage/AnimationImage";

const AboutUsMainPage = (props) => {

  return (
    <section className="section">
      <div className="container_wide">
        <div className="image_holder">
          <AnimationImage />
        </div>
        <div className="text_holder">
          <Headings heading={props.heading}/>
          <div className="content">
            <p> {props.about.text}</p>
          </div>
            <BtnDetail link={props.link}/>
        </div>
      </div>
    </section>
  );
};

export default AboutUsMainPage;