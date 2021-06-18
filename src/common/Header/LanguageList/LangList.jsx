import React from 'react';
import  s from './LangList.module.scss';
import cn from 'classnames';


const LangList = (props) => {
    return(
        <div className={s.langList}>
            <a className={cn(s.lang,s.langRu, s.disabled )} href="#">ru</a>
            <a className={cn(s.lang,s.disabled )} href="#">md</a>
        </div>
    )
}

export default LangList;