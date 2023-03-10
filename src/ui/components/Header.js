import React from "react";
import logo from "../imgs/logo.png"
import areafuncionario from "../imgs/areafuncionario.png"
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';

import Login from "../../pages/Login.js"
import "../styles/Header.css"

export default function Header(){
    return(
        <div className="header">
            <div className="header-logo">
                <p>Cantina</p>
                <img className="logo" src={logo} alt="Logo do Senai"></img>
            <div className="header-detalhes"><div className="header-detalhes-div"></div></div>
            </div>
        </div>
    );
}