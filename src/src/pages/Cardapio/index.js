// import React, { useContext, useEffect, useState } from 'react';
import Header from '../../ui/components/Header/Header.js';
import '../../ui/styles/Cardapio.css';
import '../../ui/styles/responsivo.css';
import '../../ui/styles/reset.css';


function Cardapio() {

  // const url = 'http://127.0.0.1:8080/produtos?key=07ad11b5bb6e2de98a535070ba93cdaf';
  // const [dados, setDados] = useState();
  // const [carregado, setCarregado] = useState(false);

  // async function pegaTodosProdutos(url) {
  //   let response = await fetch(url, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     mode: 'cors'
  //   });
  //   let data = await response.json();
  //   setDados(data);
  //   setCarregado(true);
  // }

  // useEffect(() => {
  //   pegaTodosProdutos(url);
  // }, []);

  // if (carregado) {
      return (
          <div>
            <div>
              <Header></Header>
            </div>
            <div className='container'>
              <div className='caixa'>
                <div className='links'>
                  <a class="page" href="#salgado">Salgado</a>
                  <a class="page" href="#lanches">Lanches</a>
                  <a class="page" href="#pasteis">Pasteis</a>
                  <a class="page" href="#tapioca-salgada">Tapioca-Salgada</a>
                  <a class="page" href="#tapioca-doce">Tapioca-Doce</a>
                  <a class="page" href="#sucos">Sucos</a>
                  <a class="page" href="#refris">Refris</a>
                  <a class="page" href="#sobremesas">Sobremesas</a>
                  <a class="page" href="#acai">Açaí</a>
                  <a class="page" href="#pratos">Pratos</a>
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
                    <table className='lista-produto'>
                      <tbody>
                      {/* {
                        dados.forEach(element => {
                          console.log(element)
                          return(
                            <tbody>
                              <td className='produto'>{element.nome}</td>
                              <td className='produto-preco'>{element}</td>
                            </tbody>
                          )
                        })
                      } */}

                      </tbody>

                      <tbody>
                        <td className='produto'>Coxinha</td>
                        <td className='produto-preco'>Preço</td>
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
                      <p className='categoria-titulo' id='lanches'>Lanches</p>
                    </div>
                  </div>
                  <div className='lista'>
                    <table className='lista-produto'>
                      <tbody className='lista-produto-itens'>
                        <td className='produto-preco-direita'>Preço</td>
                        <td className='produto-direita
                        '>Coxinha</td>
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
                        <td className='produto'>Coxinha</td>
                        <td className='produto-preco'>Preço</td>
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
                        <td className='produto-preco-direita'>Preço</td>
                        <td className='produto-direita
                        '>Coxinha</td>
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
                        <td className='produto'>Coxinha</td>
                        <td className='produto-preco'>Preço</td>
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
                        <td className='produto-preco-direita'>Preço</td>
                        <td className='produto-direita
                        '>Coxinha</td>
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
                        <td className='produto'>Coxinha</td>
                        <td className='produto-preco'>Preço</td>
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
                        <td className='produto-preco-direita'>Preço</td>
                        <td className='produto-direita'>Coxinha</td>
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
                        <td className='produto'>Coxinha</td>
                        <td className='produto-preco'>Preço</td>
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
                        <td className='produto-preco-direita'>Preço</td>
                        <td className='produto-direita
                        '>Coxinha</td>
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
                            <td className='produto'>Coxinha</td>
                            <td className='produto-preco'>Preço</td>
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
                            <td className='produto-preco-direita'>Preço</td>
                            <td className='produto-direita'>Coxinha</td>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
    
              </div>
              <div className='caixa'></div>
            </div>
          </div>
        );
  // } else {
  //   return
  // }
}

export default Cardapio;
