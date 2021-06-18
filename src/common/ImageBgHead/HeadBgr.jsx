import React from 'react';
import './HeadBgr.scss';
import Heands from "../../assets/hends_heder.jpg";


const HeadBgrImg = () => {
  return (
    <div className="container_wide">
      <div className="face_bg_img">
        <div className="animation-holder">
          <img src={Heands}/>
        </div>
      </div>
    </div>

  );

};

export default HeadBgrImg;