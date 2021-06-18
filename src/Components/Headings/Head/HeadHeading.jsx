import React from 'react'
import './HeadHeading.scss'
import BtnDetail from "../../Buttons/BtnDetail";
import {Animated} from "react-animated-css";




const HeadHeading = (props) => {
  return(
    <div className="index">
    <Animated animationIn="fadeInLeft" animationOut="fadeOutRight" animationOutDuration={1000} isVisible={true}>

    <div>
      {
        props.headTitle
          .map( text => <div className="face_txt" key={text.id}>
            <div className="container">
              <div className="f_letters">
                <h2 className="face_subtitle">{text.subtitle} <strong>{text.strongSub}</strong></h2>
                <h1 className="face_title">{text.title}</h1>
                <p className="face_desc">{text.desc}<strong>{text.strongDesc}</strong></p>
              </div>
            </div>
          </div>)
      }
      {props.headTitle.button === null ? <BtnDetail/> : ""}
    </div>

    </Animated>
    </div>

  )
}

export default HeadHeading;