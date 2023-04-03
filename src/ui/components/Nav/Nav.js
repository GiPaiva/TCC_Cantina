import React, { useEffect, useState } from 'react';
import { getProducts } from '../../../api/api';
import '../../styles/Cardapio.css';


export default function Nav() {

    const [carregado, setCarregado] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getProducts();
            setProducts(data);
            setCarregado(true);
        };
        fetchData();
    }, []);
  
    if (carregado) {
        return (
            <div className='links navbar'>
                {products.map((uDados, index) => (
                    <a className="page" href={"#" + uDados.categoria}> {uDados.categoria} </a>
                ))}
            </div>
            
        )
    } else { return }
}