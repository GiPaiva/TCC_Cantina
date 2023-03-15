import React from "react";

import "../../styles/Cardapio.css"

export default function Menu(){
    return(
        <div className='caixa'>
            <div className='links'>
                <a class="page" href="#salgado">Salgado</a>
                <a class="page" href="#lanches">Lanches</a>
                <a class="page" href="#pasteis">Pasteis</a>
                <a class="page" href="#tapioca-salgada">Tapioca-Salgada</a>
                <a class="page" href="#tapioca-doce">Tapioca-Doce</a>
                <a class="page" href="#sucos">Sucos</a>
                <a class="page" href="#refris">Refris</a>
                <a class="page" href="#sobremesas">Sobremesas</a>
                <a class="page" href="#acai">Açaí</a>
                <a class="page" href="#pratos">Pratos</a>
            </div>
        </div>
    )
}