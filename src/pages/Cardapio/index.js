import React, { useEffect, useState } from 'react';

// Componente dos Produtos
import Salgados from '../../ui/components/Produtos/Esquerda/Salgados.js';
import Lanches from '../../ui/components/Produtos/Direita/Lanches.js';
import Pasteis from '../../ui/components/Produtos/Esquerda/Pasteis.js';
import TapiocaSalgada from '../../ui/components/Produtos/Direita/TapiocaSalgada.js';
import TapiocaDoce from '../../ui/components/Produtos/Esquerda/TapiocaDoce.js';
import Pizza from '../../ui/components/Produtos/Direita/Pizza.js';
import Sobremesas from '../../ui/components/Produtos/Esquerda/Sobremesas.js';
import Acai from '../../ui/components/Produtos/Direita/Acai.js';
import PratosProntos from '../../ui/components/Produtos/Esquerda/PratosProntos.js';
import PorKilo from '../../ui/components/Produtos/Direita/PorQuilo.js';
import Bebidas from '../../ui/components/Produtos/Esquerda/Bebidas.js';

// Importação do componente Header, junto da estilização cardapio.css e responsivo.css.
import '../../ui/styles/Cardapio.css';

function Cardapio(){
  // Define dois estados iniciais: 'dados' é indefinido e 'carregado' é false.
  const [userDados, setUserDados] = useState([]);
  const [carregado, setCarregado] = useState(false);

  // Define uma função assíncrona 'pegaTodosProdutos' que busca dados da API usando o fetch.
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
      // Atualiza o estado 'dados' com os dados da API recebidos e muda o estado 'carregado' para true.
      setUserDados(data);
      setCarregado(true);
  }

  // Define um efeito que será executado uma vez, logo após a montagem do componente.
  useEffect(() => {
      pegaTodosProdutos();// Executa a função 'pegaTodosProdutos' definida anteriormente.
  }, []);

  // O código retorna o que será renderizado no componente, assim que 'dados' for atualizado e 'carregado' forem alterado para true.
  if (carregado) {
      return (
        <div>
          <div className='container view'>
            {/* Botões laterias que facilitam a procura por itens do cardápio */}
            <div className='caixa nav'>
              <div className='links navbar'>
                <a className="page" href="#salgado">Salgado</a>
                <a className="page" href="#lanches">Lanches</a>
                <a className="page" href="#pasteis">Pasteis</a>
                <a className="page" href="#tapioca-salgada">Tapioca-Salgada</a>
                <a className="page" href="#tapioca-doce">Tapioca-Doce</a>
                <a className="page" href="#bebidas">Bebidas</a>
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
                  <TapiocaDoce/>
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
                    <p className='categoria-titulo' id='bebidas'>Bebidas</p>
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
                        <p className='categoria-titulo'>Pratos Prontos</p>
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
                        <p className='categoria-titulo'>Por Quilo</p>
                      </div>
                    </div>
                    <div className='lista'>
                      <PorKilo/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className='caixa footer'></div> */}
        </div>
      );
  }
  else{
    return
  }
}

export default Cardapio;
