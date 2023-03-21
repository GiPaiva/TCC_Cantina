import React, { useContext, useEffect, useState } from 'react';
import '../../styles/Cardapio.css';

export default function Salgados() {

    const [dados, setDados] = useState();
    const [carregado, setCarregado] = useState(false);
  
    async function pegaTodosProdutos() {
        let response = await fetch('https://api-cantina-production.up.railway.app/api/produtos/salgados?key=1363dc7316d70ecf0803a4bd24ac15ab', {
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
        const salgados = []
        const salgadosPreco = []
        dados.forEach(element => {
            console.log(element)

            salgados.push(<tr><td className='produto'>{element.nome}</td>)
            salgadosPreco.push(<td className='produto-preco'>{element.preco}</td></tr>)
                
        })
        return (
            <table>
                <tbody className='lista-produto'>
                    {salgados}
                    {salgadosPreco}
                </tbody>
            </table>
        )
    } else { return }
}