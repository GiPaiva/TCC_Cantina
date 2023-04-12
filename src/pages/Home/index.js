import React from "react"
import '../../ui/styles/estilos.css'
import { Link } from "react-router-dom"
import genesislogo from "../../ui/imgs/Genesis_logo.png";
import cantinalogo from "../../ui/imgs/logo-cantina.png";

export default function Home() {
    return (
        <div className="fundo">
            <main className="container">
                <div className="informacoes">
                    <p className="descricao">Bem-Vindo ao Cantina Senai, seu Sistema de Gerenciamento da Cantina, onde poderá gerenciar 
                        os produtos a vender e os pagamentos fiados.
                        <br/>
                        <br/>
                        Tal site foi criado pelo Genesis, para saber mais clique na nossa logo ao lado.
                    </p> 
                </div>
                <div className="linksLD">
                    <div className="caixa-link">
                        <Link className="linkLD" to={'/login'}>
                            <img width={'400px'} height={'162.66px'} className="genesis" src={cantinalogo} alt="login" />
                            <button>Login</button>
                        </Link>
                        <Link className="linkLD" to={'/cardapio'}>
                            <button>Cardapio</button>
                        </Link>
                    </div>
                    <Link className="linkLD" to={'/detalhes'}>
                        <img width={'300px'} height={'162.66px'} className="genesis" src={genesislogo}  alt="logo do Genesis"/>
                        <button>Detalhes</button>
                    </Link>
                </div>
            </main>
        </div>
    )
}