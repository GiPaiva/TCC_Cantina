//Imports de Atributos
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getRestrictedData } from '../../../api/api';

//Imgs
import listaimg from '../../../ui/imgs/lista.png';
import cadastroimg from '../../../ui/imgs/cadastro.png';
import compraimg from '../../../ui/imgs/compra.png';
import cadastrofun from '../../../ui/imgs/cf.png';

//Componentes dos Produtos
import ProdutosEdit from '../../../ui/components/ProdutosEdit/ProdutosEdit';
import FormularioAdd from '../../../ui/components/Formulario/FormularioAdd';
import Nav from '../../../ui/components/Nav/Nav';

// Importação da estilização cardapio.css
import '../../../ui/styles/ProdutoEdit.css';


function Cardapio(){
  const [restrictedData, setRestrictedData] = useState([]);

  useEffect(() => {
    const fetchRestrictedData = async () => {
      const accessToken = localStorage.getItem('accessToken'); // Get the access token from localStorage
      const data = await getRestrictedData(accessToken);
      setRestrictedData(data);
    };
    fetchRestrictedData();
  }, []);


  return (
    <div>
      <div className='container view'>
        {/* Botões laterias que facilitam a procura por itens do cardápio */}
        <div className='caixa nav'>
          <div className='links navbar'>
            <Nav/>
          </div>
        </div>

        <div className='card'>
          <div className='formularioAdd'>
            <FormularioAdd/>
          </div>
          <ProdutosEdit/>
        </div>
        <div className='caixa footer'>
          <div className='links-footer'>
            <Link className='link' >
              <img className='imgs' src={listaimg} alt='Lista de Pedidos' />
            </Link>
            <Link className='link'>
              <img className='imgs' src={compraimg} alt='Adicionar Pedido'/>
            </Link>
            <Link className='link'>
              <img className='imgs' src={cadastroimg} alt='Cadastrar Cliente'/>
            </Link>
            <Link className='link'>
              <img className='imgs' src={cadastrofun} alt='Cadastrar Funcionario'/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cardapio;
