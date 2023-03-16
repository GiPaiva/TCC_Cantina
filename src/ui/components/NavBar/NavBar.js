import React from "react";

// import "../../styles/Cardapio.css";
import "../../styles/NavBar.css"
import { useState } from "react";


// https://youtu.be/hmoavRdx4YM
export default function NavBar(){
    const {showlinks, setshowlinks} = useState(false)

    const handleShowLinks = () => {
        setshowlinks(!showlinks)
    }
    return (
        
        <div className={` navbar ${show-nav ? "show-nav" : "hide-nav"} `} >
            <div className='navbar-links'>
                <div className="navbar-item">
                    <a className="navbar-link" href="#salgado">Salgado</a>
                </div>
                <div className="navbar-item">
                    <a className="navbar-link" href="#lanches">Lanches</a>
                </div>
                <div className="navbar-item">
                    <a className="navbar-link" href="#pasteis">Pasteis</a>
                </div>
                <div className="navbar-item">
                    <a className="navbar-link" href="#tapioca-salgada">Tapioca-Salgada</a>
                </div>
                <div className="navbar-item">
                    <a className="navbar-link" href="#tapioca-doce">Tapioca-Doce</a>
                </div>
                <div className="navbar-item">
                    <a className="navbar-link" href="#sucos">Sucos</a>
                </div>
                <div className="navbar-item">
                    <a className="navbar-link" href="#refris">Refris</a>
                </div>
                <div className="navbar-item">
                    <a className="navbar-link" href="#sobremesas">Sobremesas</a>
                </div>
                <div className="navbar-item">
                    <a className="navbar-link" href="#acai">Açaí</a>
                </div>
                <div className="navbar-item">
                    <a className="navbar-link" href="#pratos">Pratos</a>
                </div>
                <button className="navbar-burguer" onClick={handleShowLinks}>
                    <span className="burguer-bar"></span>
                </button>
            </div>
        </div>
    )
}