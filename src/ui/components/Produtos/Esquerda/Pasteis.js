import React, { useEffect, useState } from 'react';
import '../../../styles/Cardapio.css';

export default function Pasteis() {

    const [dados, setDados] = useState();
    const [carregado, setCarregado] = useState(false);
  
    async function pegaTodosProdutos() {
        let response = await fetch('https://api-cantina-production.up.railway.app/api/produtos/pasteis?key=1363dc7316d70ecf0803a4bd24ac15ab', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors'
        });
        let data = await response.json();
        console.log(data);
        setDados(data);
        setCarregado(true);
    }
  
    useEffect(() => {
        pegaTodosProdutos();
    }, []);
  
  
    if (carregado) {
        const produtos = []
        const protudosPreco = []
        dados.forEach(element => {
            console.log(element)

            produtos.push(<div className='produto'>{element.nome}</div>)
            protudosPreco.push(<div className='produto-preco'>R$ {element.preco}</div>)
                
        })
        return (
            <div className='lista-produto'>
                <div className='linha-produto'>
                    {produtos}
                    {protudosPreco}
                </div>
            </div>
        )
    } else { return }
}