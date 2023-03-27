import React, { useEffect, useState } from 'react';
import '../../../styles/Cardapio.css';

export default function Salgados() {

    const [userDados, setUserDados] = useState([]);
    const [carregado, setCarregado] = useState(false);

    useEffect( () => {
        const getDados = async()=>{
        const reqDados = await fetch('https://api-cantina-production.up.railway.app/api/produtos/acai?key=1363dc7316d70ecf0803a4bd24ac15ab', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors'
        });
        const resDados= await reqDados.json();
        console.log(resDados);
        setUserDados(resDados);
        setCarregado(true);
        }
        getDados();
    }, []);
  
    if (carregado) {
        return (
            <table className='lista'>
                <tbody>
                    {
                        userDados.map((uDados, index)=>(
                            <tr key={index}>
                                <td className='col produto-preco'>R$ {uDados.preco}</td>
                                <div className='col-area col-area-direita'>
                                    <td className='col texto texto-direita'>{uDados.descricao}</td>
                                    <td className='col produto-direita'>{uDados.nome}</td>
                                </div>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        )
    } else { return }
}