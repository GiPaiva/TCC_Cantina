import React, { useEffect, useState } from 'react';
import { getProducts} from '../../../api/api';
import '../../styles/Cardapio.css';

export default function Produtos() {
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
      <div>
        {products.map((uDados) => (
          <div className='esquerda' key={uDados.id}>
            <div className='categoria-caixa'>
              <div>
                <p className='categoria-titulo' id={uDados.categoria}>{uDados.categoria}</p>
              </div>
              <div className='body-detalhes'>
                <div className='body-detalhes-div1'></div>
                <div className='body-detalhes-div2'></div>
                <div className='body-detalhes-div3'></div>
              </div>
            </div>
            <div>
              <table className='lista-produto'>
                <tbody>
                  <tr>
                    <div className='col-area'>
                      <td className='col produto'>{uDados.nome}</td>
                      <td className='col texto'>{uDados.descricao}</td>
                    </div>
                    <td className='col produto-preco'>R$ {uDados.preco}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
}
