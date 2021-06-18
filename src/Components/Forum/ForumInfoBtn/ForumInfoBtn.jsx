import React from 'react'
import f from './ForumInfoBtn.module.scss'
import Info from "../../Icons/forum/info";
import Rule from "../../Icons/forum/rule";


const ForumInfoBtn =() => {
  return(
    <div className={f.rulesForum}>
      <a href="" alt="правила форума"><Rule width={80} height={80}/></a>
      <a className={f.information} href="" alt="как использовать форум"><Info width={80} height={80}/></a>
    </div>
  )
}

export default ForumInfoBtn;