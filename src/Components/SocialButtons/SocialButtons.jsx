import React from 'react'
import './SocialButtons.scss'
import {Col} from 'react-bootstrap'
import Facebook from "../../Components/Icons/Facebook"
import Instagram from "../../Components/Icons/instagram"
import YouTube from "../../Components/Icons/youTube"


const SocialButtons = (props) => {

  return(
    <Col>
      <ul className="social_list">
        <li><a href="https://www.facebook.com/aopsrm" title="facebook" target="_blank">
          <Facebook width={25} height={25} />
        </a></li>
        <li><a href="#" title="instagram" target="_blank" className="isDisabled">
          <Instagram width={25} height={25}/>
        </a></li>
        <li><a href="#" title="youtube" target="_blank" className="isDisabled">
          <YouTube width={25} height={25}/>
        </a></li>

      </ul>
    </Col>
  )
}

export default SocialButtons;