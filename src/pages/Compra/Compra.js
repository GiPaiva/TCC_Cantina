import React, { useMemo, useState } from 'react';
import '../../ui/styles/Compra.css';



const frutas = [
    'uva' , 
    
];

export default function Compra() {
    const [busca, setBusca] = useState('');

    const frutasFiltradas = useMemo(() => {
        const lowerBusca = busca.toLowerCase();
        return frutas.filter((fruta) => fruta.toLowerCase().includes(lowerBusca)
        );
    }, [busca]);
    
    return(
        <div className='container'>
                    <div className='lista-compras'><br></br>     
                        Compra de: <input className="compra" type="text" name="username" id="username" placeholder="Nome"/><br></br><br></br>
                        <h1>Pesquisa de itens</h1><br></br>
                        <input
                        className='textoo'
                        type='text'
                        value={busca}
                        onChange={(ev) => setBusca(ev.target.value)}
                        />
                            <div className='container-compra'><br></br>
                                    <ul>
                                        {frutasFiltradas.map((fruta) =>(
                                            <div className='fruta' key={fruta}>
                                                <l1 >{fruta}</l1><br></br>
                                                <button className='btn-compra' onClick={(e) => console.log(e)}>Adicionar</  button>
                                </div>
                                    ))}
                                    </ul>
                            </div>
                    </div> 
                </div>
    )
}


