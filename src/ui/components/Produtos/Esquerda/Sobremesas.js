import React, { useEffect, useState } from 'react';
import '../../../styles/Cardapio.css';

export default function Salgados() {

    const [userDados, setUserDados] = useState([]);
    const [carregado, setCarregado] = useState(false);

    useEffect( () => {
        const getDados = async()=>{
        const reqDados = await fetch('https://api-cantina-production.up.railway.app/api/produtos/sobremesas?key=1363dc7316d70ecf0803a4bd24ac15ab', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors'
        });
        const resDados= await reqDados.json();
        setUserDados(resDados);
        setCarregado(true);
        }
        getDados();
    }, []);
  
    if (carregado) {
        return (
            <table className='lista-produto'>
                <tbody>
                    {
                        userDados.map((uDados, index)=>(
                            <tr key={index}>
                                <div className='col-area'>
                                    <td className='col produto'>{uDados.nome}</td>
                                    <td className='col texto'>{uDados.descricao}</td>
                                </div>
                                <td className='col produto-preco'>R$ {uDados.preco}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        )
    } else { return }
}