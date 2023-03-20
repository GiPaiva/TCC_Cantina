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

            produtos.push(<tr><td className='produto'>{element.nome}</td>)
            protudosPreco.push(<td className='produto-preco'>R$ {element.preco}</td></tr>)
                
        })
        return (
            <table className='lista-produto'>
                <tbody className='lista-produto'>
                    {produtos}
                    {protudosPreco}
                </tbody>
            </table>
        )
    } else { return }
}