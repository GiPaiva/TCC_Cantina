import React from "react"
import '../../ui/styles/estilos.css'
import { Link } from "react-router-dom"
import genesislogo from "../../ui/imgs/Genesis_logo.png";
import cantinalogo from "../../ui/imgs/logo-cantina.png";

export default function detalhes() {
    return (
        <div className="fundo">
            <main className="container">
                <div className="informacoes">
                    <p className="descricao"> Genesis foi criado pela turma A 3DM de 2023, em seu TCC pela rede SENAI, 
                        sob as orientações do professor Atila Olivi e a ajuda de ademais professores.</p>
                    <p className="descricao"> O projeto teve inicio no 3° semestre do curso 
                        de Desenvolvimento de Sistemas na escola proficionalizante SENAI Suíço-Brasileira "Paulo Ernesto Tolle"</p>
                </div>
                <div className="linksLD">
                    <Link className="linkLD" to={'/'}>
                        <img width={'300px'} height={'162.66px'} className="genesis" src={genesislogo}  alt="logo do Genesis"/>
                        <button>Home</button>
                    </Link>
                    <Link className="linkLD" to={'/login'}>
                        <img width={'400px'} height={'162.66px'} classname="genesis" src={cantinalogo} alt="login" />
                        <button>Login</button>
                    </Link>
                </div>
            </main>
        </div>
    )
}


