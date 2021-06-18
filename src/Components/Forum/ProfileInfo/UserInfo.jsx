import React from 'react'
import f from './UserInfo.module.scss'



const UserInfo = () => {
  return(
    <div className={f.descBlock}>
      <div className={f.circle}> </div>
      <div className={f.imgWrap}>
        <img
          src="https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg"
          alt=""/>
      </div>
      <span className={f.descrAva}>
            <a href="" className={f.nameAva}>Chucha</a>
          </span>
    </div>

  )
}

export default UserInfo;