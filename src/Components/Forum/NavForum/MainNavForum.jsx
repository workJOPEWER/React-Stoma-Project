import React from 'react';
import HeaderLoginContainer from "../../../Pages/Forum/HeaderLoginContainer";
import SingIn from './SingIn'


const MainNavForum = (props) => {
  return(
    <div>
      {props.isAuth ? <HeaderLoginContainer /> : <SingIn/>}
    </div>
  )
}
export default MainNavForum;