//Imports de Atributos
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProductsByCategory, Logout } from '../../api/api';
// import Modal from 'react-modal';

//Imgs
import listaimg from '../../ui/imgs/lista.png';
import cadastroimg from '../../ui/imgs/cadastro.png';
import compraimg from '../../ui/imgs/compra.png';
import cadastrofunimg from '../../ui/imgs/cf.png';
import logoutimg from '../../ui/imgs/logout.png';

//Componentes dos Produtos
import FormularioAdd from '../../ui/components/Formulario/FormularioAdd';

// Importação da estilização cardapio.css
import '../../ui/styles/ProdutoEdit.css';

// Modal.setAppElement('#root');

function ListaProd(){
  const [currentPage, setCurrentPage] = useState('salgados');
  const [products, setProducts] = useState([]);
  
  //função do botão
  const handleButtonClick = async (page) => {
    getProductsByCategory(page)
    setCurrentPage(page); 
  };

  //Get dados de acordo com o que vier da seleção vindo da função do botão
  useEffect(() => {
    const fetchData = async () => {
      const data = await getProductsByCategory(currentPage);
      setProducts(data);
    };
    fetchData();
  }, [currentPage]);

  // // Hook que demonstra se a modal está aberta ou não
  // const [modalIsOpen, setIsOpen] = React.useState(false);

  // // Função que abre a modal
  // function abrirModal() {
  //   setIsOpen(true);
  // }

  // // Função que fecha a modal
  // function fecharModal() {
  //   setIsOpen(false);
  // }

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
            <button className="page" onClick={() => handleButtonClick('pratosprontos')}>Pratos Prontos</button>
            <button className="page" onClick={() => handleButtonClick('porquilo')}>Por Quilo</button>
          </div>
        </div>
        <div className='card'>
          <div className='formularioAdd'>
            <FormularioAdd />
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
                  {currentPage === 'tapiocasdoces' && (
                    <p className='categoria-titulo'>Tapiocas Doces</p>
                  )}
                  {currentPage === 'tapiocassalgadas' && (
                    <p className='categoria-titulo'>Tapiocas Salgadas</p>
                  )}
                  {currentPage === 'pratosprontos' && (
                    <p className='categoria-titulo'>Pratos Prontos</p>
                  )}
                  {currentPage === 'porquilo' && (
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
                    {/*(Se) Caso o array não estiver vazio, verificando pelo tamanho deste */}
                    {products?.length > 0 ? (
                      <tbody>
                        {products.map((uDados, index) => (
                          <div className="tabela-produto">
                            <tr key={index} className='col-area'>
                              <td className='col-texto'>
                                <p className='col produto'>{uDados.nome}</p>
                                <p className='col texto'>{uDados.descricao}</p>
                              </td>
                              <td className='col produto-preco'>R$ {uDados.preco}</td>
                              <td className='col btn'>
                                <Link className='btn-edit'>Editar</Link>
                                <Link className='btn-delet' to={"/deletProd" + uDados.id} >Deletar</Link>
                              </td>
                            </tr>
                          </div>
                        ))}
                      </tbody>
                    ) : (
                      /*(Senão) Caso o array não estiver vazio */
                      <tbody>
                        <tr>
                          <td className='col produto'>Produtos não disponiveis</td>
                        </tr>
                      </tbody>
                    )}
                </table>
              </div>
            </div>
          </div>
        </div>
    
        <div className='caixa footer'>
          <div className='links-footer'>
            <Link className='link' to={'/listaproduto'}>
              <img className='imgs' src={listaimg} alt='Lista de Pedidos'/>
            </Link>
            <Link className='link' to={'/compra'}>
              <img className='imgs' src={compraimg} alt='Adicionar Pedido' />
            </Link>
            <Link className='link' to={'/cadastro'}>
              <img className='imgs' src={cadastroimg} alt='Cadastrar Cliente' />
            </Link>
            <Link className='link' to={'/funcionario'}>
              <img className='imgs' src={cadastrofunimg} alt='Cadastrar Funcionario' />
            </Link>
            <Link className='link' onClick={Logout} to={'/'}>
              <img className='imgs' src={logoutimg} alt='Logout' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListaProd;
