import React from "react";
import s from './AnimationImage.module.scss';
import Logo from './../../assets/Logo.png'

const AnimationImage = (props) => {
  return (
      <div className={s.animationHolder}>
        <img src={Logo} alt=""/>
      </div>
  );
};

export default AnimationImage;