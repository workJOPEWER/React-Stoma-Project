import React from 'react';
import loader from '../../assets/loader.gif';


let Preloader = (props) => {
  return(
    <div>
      <img src={loader} alt=""/>
    </div>
  )
}

export default Preloader;