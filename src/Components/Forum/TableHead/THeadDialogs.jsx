import React from 'react'
import f from './THead.module.scss'

const THeadDialogs = (props) => {
  return(
    <thead>
    <tr className={f.thead}>
      <th className={f.forumRule}>{props.name}{" "}
      <span className={f.title}>{props.title}</span>{' '}{props.categName}{' '}
        <a className={f.categTitle} href="">{props.category}</a>
      </th>
    </tr>
    </thead>
  )
}

export default THeadDialogs;