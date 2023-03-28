import React, { useEffect, useState } from 'react';


//Imgs
import listaimg from '../../ui/imgs/lista.png';
import cadastroimg from '../../ui/imgs/cadastro.png';
import compraimg from '../../ui/imgs/compra.png';

//Componentes dos Produtos
import Salgados from '../../ui/components/ProdutosEdit/Esquerda/Salgados.js';
import Lanches from '../../ui/components/ProdutosEdit/Direita/Lanches.js';
import Pasteis from '../../ui/components/ProdutosEdit/Esquerda/Pasteis.js';
import TapiocaSalgada from '../../ui/components/ProdutosEdit/Direita/TapiocaSalgada.js';
import TapiocaDoce from '../../ui/components/ProdutosEdit/Esquerda/TapiocaDoce.js';
import Pizza from '../../ui/components/ProdutosEdit/Direita/Pizza.js';
import Sobremesas from '../../ui/components/ProdutosEdit/Esquerda/Sobremesas.js';
import Acai from '../../ui/components/ProdutosEdit/Direita/Acai.js';
import PratosProntos from '../../ui/components/ProdutosEdit/Esquerda/PratosProntos.js';
import PorKilo from '../../ui/components/ProdutosEdit/Direita/PorQuilo.js';
import Bebidas from '../../ui/components/ProdutosEdit/Esquerda/Bebidas.js';

// Importação do componente Header, junto da estilização cardapio.css e responsivo.css
import '../../ui/styles/Cardapio.css';
import { Link } from 'react-router-dom';


function Cardapio(){
  const [userDados, setUserDados] = useState([]);
  const [carregado, setCarregado] = useState(false);
  const [formvalue, setFormvalue] = useState({
    nome:'', 
    preco: 0,
    descricao:'', 
    categoria:'', 
  });

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
      setUserDados(data);
      setCarregado(true);
  }

  useEffect(() => {
      pegaTodosProdutos();
  }, []);

  const handleInput=(e)=>{
    const {name, value}= e.target;
    setFormvalue({...formvalue,[name]:value});
  }
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const allInputsValue={ nome:formvalue.nome, descricao:formvalue.descricao, categoria:formvalue.categoria, preco:formvalue.preco};
    console.log(allInputsValue);
    

  //   let resp = await fetch('https://api-cantina-production.up.railway.app/api/produtos?key=1363dc7316d70ecf0803a4bd24ac15ab', {
  //     method: 'POST',
  //     headers: {
  //         'Content-Type': 'application/json'
  //     },
  //     mode: 'cors'
  // });
  }

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
              <div className='formularioAdd'>
                <form className='from-prod-add'  onSubmit={ handleSubmit}>
                  <input type="text" className='input-nome' name='nome' value={formvalue.nome} onChange={ handleInput} placeholder='nome...' pattern='^(?=*[a-z])' required/>
                  <input type="text" className='input-descricao' name='descricao' value={formvalue.descricao} onChange={ handleInput} placeholder='descricao...' />
                  <input className='input-datalist' list='categorias' name='categoria' value={formvalue.categoria} onChange={ handleInput} placeholder='categoria...' required/>
                  <datalist id='categorias'>
                    {
                      userDados.map((uDados)=>(
                          <option className='options-categoria' id='categoria' name='categoria'>{uDados.categoria}</option>
                      ))
                    }
                  </datalist>
                  <span>R$</span>
                  <input type="number" className='input-preco' name='preco' value={formvalue.preco} onChange={ handleInput} placeholder='0.00'/>
                  <button type='submit' className='btn-submit'>Salvar</button>
                </form>
              </div>
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
                <div className='lista-prod'>
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
              </div>
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
