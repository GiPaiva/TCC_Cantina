import React, { useContext, useEffect, useState } from 'react';

import Header from '../../ui/components/Header/Header.js';
import Salgados from '../../ui/components/Produtos/Salgados.js';

import '../../ui/styles/Cardapio.css';

function Cardapio(){

  const [dados, setDados] = useState();
  const [carregado, setCarregado] = useState(false);
  
  async function pegaTodosProdutos() {
    let response = await fetch('https://api-cantina-production.up.railway.app/api/produtos?key=1363dc7316d70ecf0803a4bd24ac15ab', {
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
  
  
  if(carregado){
    return (
        <div>
          <div>
            <Header></Header>
          </div>
          <div className='container view'>
            <div className='caixa nav'>
              <div className='links navbar'>
                <a className="page" href="#salgado">Salgado</a>
                <a className="page" href="#lanches">Lanches</a>
                <a className="page" href="#pasteis">Pasteis</a>
                <a className="page" href="#tapioca-salgada">Tapioca-Salgada</a>
                <a className="page" href="#tapioca-doce">Tapioca-Doce</a>
                <a className="page" href="#sucos">Sucos</a>
                <a className="page" href="#refris">Refris</a>
                <a className="page" href="#sobremesas">Sobremesas</a>
                <a className="page" href="#acai">Açaí</a>
                <a className="page" href="#pratos">Pratos</a>
              </div>
            </div>
            <div className='card'>
              <div className='esquerda'>
                <div className='categoria-caixa'>
                  <div>
                    <p className='categoria-titulo' id='salgado'>Salgados</p>
                  </div>
                  <div className="body-detalhes">
                    <div className="body-detalhes-div1"></div>
                    <div className="body-detalhes-div2"></div>
                    <div className="body-detalhes-div3"></div>
                  </div>
                </div>
                <div>
                  <div className='lista-produto'>
                    <div>
                      <Salgados></Salgados>
                    </div>
                  </div>
                </div>
              </div>
  
              <div className='direita'>
                <div className='categoria-caixa'>
                  <div className="body-detalhesD">
                    <div className="body-detalhes-div2"></div>
                    <div className="body-detalhes-div3"></div>
                    <div className="body-detalhes-div1"></div>
                  </div>
                  <div>
                    <p className='categoria-titulo' id='lanches'>Lanches</p>
                  </div>
                </div>
                <div className='lista'>
                  <table className='lista-produto'>
                    <tbody className='lista-produto-itens'>
                      <tr>
                        <td className='produto-preco-direita'>Preço</td>
                        <td className='produto-direita'>Coxinha</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
  
              <div className='esquerda'>
                <div className='categoria-caixa'>
                  <div>
                    <p className='categoria-titulo' id='pasteis'>Pasteis</p>
                  </div>
                  <div className="body-detalhes">
                    <div className="body-detalhes-div3"></div>
                    <div className="body-detalhes-div2"></div>
                    <div className="body-detalhes-div1"></div>
                  </div>
                </div>
                <div>
                  <table className='lista-produto'>
                    <tbody>
                      <tr>
                        <td className='produto'>Coxinha</td>
                        <td className='produto-preco'>Preço</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
  
              <div className='direita'>
                <div className='categoria-caixa'>
                  <div className="body-detalhesD">
                    <div className="body-detalhes-div3"></div>
                    <div className="body-detalhes-div1"></div>
                    <div className="body-detalhes-div2"></div>
                  </div>
                  <div>
                    <p className='categoria-titulo' id='tapioca-salgada'>Tapioca-Salgada</p>
                  </div>
                </div>
  
                <div className='lista'>
                  <table className='lista-produto'>
                    <tbody className='lista-produto-itens'>
                      <tr>
                        <td className='produto-preco-direita'>Preço</td>
                        <td className='produto-direita'>Coxinha</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
  
              <div className='esquerda'>
                <div className='categoria-caixa'>
                  <div>
                    <p className='categoria-titulo' id='tapioca-doce'>Tapioca-Doce</p>
                  </div>
                  <div className="body-detalhes">
                    <div className="body-detalhes-div1"></div>
                    <div className="body-detalhes-div3"></div>
                    <div className="body-detalhes-div2"></div>
                  </div>
                </div>
  
                <div>
                  <table className='lista-produto'>
                    <tbody>
                      <tr>
                        <td className='produto'>Coxinha</td>
                        <td className='produto-preco'>Preço</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
  
              <div className='direita'>
                <div className='categoria-caixa'>
                  <div className="body-detalhesD">
                    <div className="body-detalhes-div2"></div>
                    <div className="body-detalhes-div1"></div>
                    <div className="body-detalhes-div3"></div>
                  </div>
                  <div>
                    <p className='categoria-titulo' id='sucos'>Sucos</p>
                  </div>
                </div>
  
                <div className='lista'>
                  <table className='lista-produto'>
                    <tbody className='lista-produto-itens'>
                      <tr>
                        <td className='produto-preco-direita'>Preço</td>
                        <td className='produto-direita'>Coxinha</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
  
              <div className='esquerda'>
                <div className='categoria-caixa'>
                  <div>
                    <p className='categoria-titulo' id='refris'>Refris</p>
                  </div>
                  <div className="body-detalhes">
                    <div className="body-detalhes-div3"></div>
                    <div className="body-detalhes-div1"></div>
                    <div className="body-detalhes-div2"></div>
                  </div>
                </div>
                <div>
                  <table className='lista-produto'>
                    <tbody>
                      <tr>
                        <td className='produto'>Coxinha</td>
                        <td className='produto-preco'>Preço</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
  
              <div className='direita'>
                <div className='categoria-caixa'>
                  <div className="body-detalhesD">
                    <div className="body-detalhes-div2"></div>
                    <div className="body-detalhes-div3"></div>
                    <div className="body-detalhes-div1"></div>
                  </div>
                  <div>
                    <p className='categoria-titulo' id='pizza'>Pizza</p>
                  </div>
                </div>
                <div className='lista'>
                  <table className='lista-produto'>
                    <tbody className='lista-produto-itens'>
                      <tr>
                        <td className='produto-preco-direita'>Preço</td>
                        <td className='produto-direita'>Coxinha</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
  
              <div className='esquerda'>
                <div className='categoria-caixa'>
                  <div>
                    <p className='categoria-titulo' id='sobremesas'>Sobremesas</p>
                  </div>
                  <div className="body-detalhes">
                    <div className="body-detalhes-div2"></div>
                    <div className="body-detalhes-div1"></div>
                    <div className="body-detalhes-div3"></div>
                  </div>
                </div>
                <div>
                  <table className='lista-produto'>
                    <tbody>
                      <tr>
                        <td className='produto'>Coxinha</td>
                        <td className='produto-preco'>Preço</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
  
              <div className='direita'>
                <div className='categoria-caixa'>
                  <div className="body-detalhesD">
                    <div className="body-detalhes-div1"></div>
                    <div className="body-detalhes-div3"></div>
                    <div className="body-detalhes-div2"></div>
                  </div>
                  <div>
                    <p className='categoria-titulo' id='acai'>Açaí</p>
                  </div>
                </div>
                <div className='lista'>
                  <table className='lista-produto'>
                    <tbody className='lista-produto-itens'>
                      <tr>
                        <td className='produto-preco-direita'>Preço</td>
                        <td className='produto-direita'>Coxinha</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
  
              <div className='meio'>
                <div className='meio-pratos'>
                  <div className="body-detalhesD">
                    <div className="body-detalhes-div1"></div>
                    <div className="body-detalhes-div3"></div>
                    <div className="body-detalhes-div2"></div>
                  </div>
                  <p className='pratos' id='pratos'>Pratos</p>
                  <div className="body-detalhes">
                    <div className="body-detalhes-div3"></div>
                    <div className="body-detalhes-div1"></div>
                    <div className="body-detalhes-div2"></div>
                  </div>
                </div>
                <div>
                  <div className='esquerda'>
                    <div className='categoria-caixa'>
                      <div>
                        <p className='categoria-titulo' id='sobremesas'>Pratos Prontos</p>
                      </div>
                      <div className="body-detalhes">
                        <div className="body-detalhes-div2"></div>
                        <div className="body-detalhes-div3"></div>
                        <div className="body-detalhes-div1"></div>
                      </div>
                    </div>
                    <div>
                      <table className='lista-produto'>
                        <tbody>
                          <tr>
                            <td className='produto'>Coxinha</td>
                            <td className='produto-preco'>Preço</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
  
                  <div className='direita'>
                    <div className='categoria-caixa'>
                      <div className="body-detalhesD">
                        <div className="body-detalhes-div3"></div>
                        <div className="body-detalhes-div1"></div>
                        <div className="body-detalhes-div2"></div>
                      </div>
                      <div>
                        <p className='categoria-titulo' id='acai'>Por Kilo</p>
                      </div>
                    </div>
                    <div className='lista'>
                      <table className='lista-produto'>
                        <tbody className='lista-produto-itens'>
                          <tr>
                            <td className='produto-preco-direita'>Preço</td>
                            <td className='produto-direita'>Coxinha</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
  
            </div>
            <div className='caixa footer'>
            </div>
          </div>
        </div>
      );
  }
  else{
    return
  }
}

export default Cardapio;
