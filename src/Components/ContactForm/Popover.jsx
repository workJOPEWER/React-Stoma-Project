import React from 'react';
import s from './SendForm.module.scss'
import {OverlayTrigger, Button, Popover, Tooltip} from 'react-bootstrap';
import Bitacoras from "../Icons/bitacoras";

const popover = (
  <Popover id="popover-basic">
    <Popover.Title as="h4">Protected by reCAPTCHA</Popover.Title>
    <Popover.Content>
      <a href="#" target="_blank" rel="noopener"disable >Privacy Policy</a>
      <br/>
      <a href="#" target="_blank" rel="noopener">Terms of Use</a>
    </Popover.Content>
  </Popover>
);

const PopoverMe = () =>{
    return(
      <div className={s.cartchaForm}>
        <div className={s.cartchaSvg}>
          <OverlayTrigger trigger="click" placement="right"
                          overlay={<Tooltip id="tooltip-disabled">В разработке</Tooltip>}>
            <Button className={s.chatcha}>
              <div type="checkbox">
                <Bitacoras />
              </div>
            </Button>
          </OverlayTrigger>
        </div>
      </div>
    )
}
export default PopoverMe;


// {/* overlay={popover}*/}