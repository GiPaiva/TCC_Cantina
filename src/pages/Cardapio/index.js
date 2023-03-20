import React, { useEffect, useState } from 'react';


import Salgados from '../../ui/components/Produtos/Esquerda/Salgados.js';
import Lanches from '../../ui/components/Produtos/Direita/Lanches.js';
import Pasteis from '../../ui/components/Produtos/Esquerda/Pasteis.js';
import TapiocaSalgada from '../../ui/components/Produtos/Direita/TapiocaSalgada.js';
import TapiocaDoce from '../../ui/components/Produtos/Esquerda/TapiocaDoce.js';
import Pizza from '../../ui/components/Produtos/Direita/Pizza.js';
import Sobremesas from '../../ui/components/Produtos/Esquerda/Sobremesa.js';
import Acai from '../../ui/components/Produtos/Direita/Acai.js';
import PratosProntos from '../../ui/components/Produtos/Esquerda/PratosProntos.js';
import PorKilo from '../../ui/components/Produtos/Direita/PorKilo.js';
import Bebidas from '../../ui/components/Produtos/Esquerda/Bebidas.js';

// Importação do componente Header, junto da estilização cardapio.css e responsivo.css
import Header from '../../ui/components/Header/Header.js';
import '../../ui/styles/Cardapio.css';


function Cardapio(){

  const url = 'http://127.0.0.1:8080/produtos?key=07ad11b5bb6e2de98a535070ba93cdaf';
  const [dados, setDados] = useState();
  const [carregado, setCarregado] = useState(false);

  async function pegaTodosProdutos(url) {
    let response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors'
    });
    let data = await response.json();
    setDados(data);
    setCarregado(true);
  }

  useEffect(() => {
    pegaTodosProdutos(url);
  }, []);

  if (carregado) {
      return (
          <div>
            <div>
              {/* Componente Header, fixado na parte de cima das telas */}
              <Header></Header>
            </div>
            <div className='container view'>
              {/* Botões laterias que facilitam a procura por itens do cardápio */}
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
                    {/* Div body-detalhes com o uso do CSS para estilização e criação de barras flutuantes ao lado da descrição de produto */}
                    <div className="body-detalhes">
                      <div className="body-detalhes-div1"></div>
                      <div className="body-detalhes-div2"></div>
                      <div className="body-detalhes-div3"></div>
                    </div>
                  </div>
                  <div>
                    <Salgados/>
                  </div>
                </div>
    
                <div className='direita'>
                  <div className='categoria-caixa'>
                    {/* Div body-detalhesD faz mesma função do seu homônimo acima, porém para o lado direito*/}
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
                    <Lanches/>
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
                    <Pasteis/>
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
                    <TapiocaSalgada/>
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
                      <p className='categoria-titulo' id='tapioca-doce'>Tapioca-Doce</p>
                    </div>
                  </div>
    
                  <div>
                    <TapiocaDoce/>
                  </div>
                </div>
    
                <div className='esquerda'>
                  <div className='categoria-caixa'>
                    <div className="body-detalhes">
                      <div className="body-detalhes-div2"></div>
                      <div className="body-detalhes-div3"></div>
                      <div className="body-detalhes-div1"></div>
                    </div>
                  </div>
                  <div>
                    <p className='categoria-titulo' id='pizza'>Pizza</p>
                  </div>
                </div>
                <div className='lista'>
                  <Pizza/>
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
                  <Sobremesas/>
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
                  <Acai/>
                </div>
              </div>
  
              <div className='esquerda'>
                <div className='categoria-caixa'>
                  <div>
                    <p className='categoria-titulo' id='refris'>Bebidas</p>
                  </div>
                  <div className="body-detalhes">
                    <div className="body-detalhes-div3"></div>
                    <div className="body-detalhes-div1"></div>
                    <div className="body-detalhes-div2"></div>
                  </div>
                </div>
                <div>
                  <Bebidas/>
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
                      <PratosProntos/>
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
                      <PorKilo/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='caixa footer'></div>
          </div>
        </div>
      );
  }
  else{
    return
  }
}

export default Cardapio;
