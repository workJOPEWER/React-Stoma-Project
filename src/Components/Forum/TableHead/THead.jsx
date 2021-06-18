import React from 'react'
import f from './THead.module.scss'

const THead = (props) => {
  return(
    <thead>
    <tr className={f.thead}>
      <th className={f.forumRule}>{props.name}</th>
      <th className={f.two}>{props.stTitle}</th>
      <th className={f.three}>{props.pstTitle}</th>
    </tr>
    </thead>
  )
}

export default THead;