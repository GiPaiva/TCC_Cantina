import React from "react";

import "../../styles/Cardapio.css"

export default function NavBar(){
    return (
        
        <div className='navbar'>
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
            </div>
        </div>
    )
}