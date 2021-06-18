import React, {Component} from 'react';
import './RegLogForms.scss';

const RegLogForms =() =>{
    return(
        <div className="reg_forms">
            <a className="gen_reg_log reg" href="#registr">регистрация</a>
            <a className="gen_reg_log log" href="#log">вход</a>
        </div>
    )
}

export default RegLogForms;