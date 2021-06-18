import React from "react";
import "./Head.scss";
import HeadHeading from "../../Components/Headings/Head/HeadHeading";
import Heands from "../../assets/hends_heder.jpg";
import Arrow from "./Arrow/Arrow";

const HeadBlock = (props) => {
  return (
    <div>
      <div className="face">
        <div className="container_wide">
          <div className="face_bg_img">
            <div className="animation-holder">
              <img src={Heands}/>
            </div>
          </div>
        </div>
        <HeadHeading headTitle={props.headTitle}/>
      </div>
      <div>
        <Arrow/>
      </div>
    </div>


  );
};

export default HeadBlock;