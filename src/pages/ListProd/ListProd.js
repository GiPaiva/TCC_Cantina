//Imports de Atributos
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProductsByCategory } from '../../api/api';

//Imgs
import listaimg from '../../ui/imgs/lista.png';
import cadastroimg from '../../ui/imgs/cadastro.png';
import compraimg from '../../ui/imgs/compra.png';
import cadastrofun from '../../ui/imgs/cf.png';

//Componentes dos Produtos
import FormularioAdd from '../../ui/components/Formulario/FormularioAdd';

// Importação da estilização cardapio.css
import '../../ui/styles/ProdutoEdit.css';


function Cardapio(){
  const [currentPage, setCurrentPage] = useState('salgados');
  const [products, setProducts] = useState([]);
  
  
  //função do botão
  const handleButtonClick = async (page) => {
    getProductsByCategory(page)
    setCurrentPage(page); 
  };

  //Sem pecualiaridades os dados pegar de acordo com o que vier da função do botão
  useEffect(() => {
      const fetchData = async () => {
      const data = await getProductsByCategory(currentPage);
      setProducts(data);
      };
      fetchData();
  }, [currentPage]);


  
  return (
    <div>
      <div className='container view'>
        {/* Botões laterias que facilitam a procura por itens do cardápio */}
        <div className='caixa nav'>
            <div className='links navbar'>
                <button className="page" onClick={() => handleButtonClick('salgados')} >Salgado</button>
                <button className="page" onClick={() => handleButtonClick('lanches')}>Lanches</button>
                <button className="page" onClick={() => handleButtonClick('bebidas')}>Bebidas</button>
                <button className="page" onClick={() => handleButtonClick('pasteis')}>Pasteis</button>
                <button className="page" onClick={() => handleButtonClick('pizzas')}>Pizzas</button>
                <button className="page" onClick={() => handleButtonClick('tapiocassalgadas')}>Tapiocas Salgadas</button>
                <button className="page" onClick={() => handleButtonClick('tapiocasdoces')}>Tapiocas Doces</button>
                <button className="page" onClick={() => handleButtonClick('sobremesas')}>Sobremesas</button>
                <button className="page" onClick={() => handleButtonClick('acais')}>Açaí</button>
                <button className="page" onClick={() => handleButtonClick('pratosprontos')}>Pratos Prontos</button>
                <button className="page" onClick={() => handleButtonClick('porquilo')}>Por Quilo</button>
            </div>
        </div>
        <div className='card'>
          <div className='formularioAdd'>
            <FormularioAdd/>
          </div>
          <div>

            <div className='esquerda'>
              <div className='categoria-caixa'>
                <div>
                    {/* Uma peculidade em relação a escrita da palavra, 
                      para manter padroes e não enviar ç e acentos para a api/banco, 
                      então mudamos de forma manula */}
                    {(currentPage !== 'acais') &&
                    (currentPage !== 'tapiocasdoces') &&
                    (currentPage !== 'tapiocassalgadas') &&
                    (currentPage !== 'pratosprontos') &&
                    (currentPage !== 'porquilo') && (
                      <p className='categoria-titulo'>{currentPage}</p>
                    )}
                    {currentPage === 'acais' && (
                      <p className='categoria-titulo'>Açaís</p>
                    )}
                    {currentPage === 'tapiocasdoces' &&(
                      <p className='categoria-titulo'>Tapiocas Doces</p>
                    )}
                    {currentPage === 'tapiocassalgadas' &&(
                      <p className='categoria-titulo'>Tapiocas Salgadas</p>
                    )}
                    {currentPage === 'pratosprontos' &&(
                      <p className='categoria-titulo'>Pratos Prontos</p>
                    )}
                    {currentPage === 'porquilo' &&(
                      <p className='categoria-titulo'>Por Quilo</p>
                    )}
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
                    {/*(Se) Caso o array não estiver vazio, verificando pelo tamanho deste */}
                    {products.length > 0 ? (
                      <div>
                        {products.map((uDados) => (
                          <tr>
                            <div className='col-area'>
                              <td className='col produto'>{uDados.nome}</td>
                              <td className='col texto'>{uDados.descricao}</td>
                            </div>
                            <td className='col produto-preco'>R$ {uDados.preco}</td>
                            <td className='col btn'>
                              <Link className='btn-edit' to={"/editProd" + uDados.nome} >Editar</Link>
                              <Link className='btn-delet' to={"/deletProd" + uDados.nome} >Deletar</Link>
                            </td>
                          </tr>
                        ))}
                      </div>
                    ) : (
                      /*(Senão) Caso o array não estiver vazio */
                      <tr>
                        <td className='col produto'>Produtos não disponiveis</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
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
