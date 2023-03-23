import React, { useEffect, useState } from 'react';
import '../../../styles/Cardapio.css';

export default function Salgados() {

    const [userDados, setUserDados] = useState([]);
    const [carregado, setCarregado] = useState(false);

    useEffect( () => {
        const getDados = async()=>{
        const reqDados = await fetch('https://api-cantina-production.up.railway.app/api/produtos/salgados?key=1363dc7316d70ecf0803a4bd24ac15ab', {
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
            <table className='lista-produto'>
                <tbody>
                    {
                        userDados.map((uDados, index)=>(
                            <tr key={index}>
                                <td className='col produto'>{uDados.nome}</td>
                                <td className='col produto-preco'>R$ {uDados.preco}</td>
                                {/* <td>
                                <Link to={"/editProd" + uDados.nome} >Editar</Link>
                                <Link to="/deletProd" >Deletar</Link>
                                </td> */}
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        )
    } else { return }
}