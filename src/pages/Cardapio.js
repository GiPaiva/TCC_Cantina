import Header from '../ui/components/Header';
import '../ui/styles/Cardapio.css';

function Cardapio() {
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div className='container'>
        <div className='caixa links'>
          <a class="page" href="#salgado">Salgado</a>
					<a class="page" href="#lanches">Lanches</a>
					<a class="page" href="#pasteis">Pasteis</a>
					<a class="page" href="#tapioca-salgada">Tapioca-Salgada</a>
					<a class="page" href="#tapioca-doce">Tapioca-Doce</a>
					<a class="page" href="#sucos">Sucos</a>
					<a class="page" href="#refris">Refris</a>
					<a class="page" href="#sobremesa">Sobremesa</a>
					<a class="page" href="#acai">Açaí</a>
        </div>
        <div className='card'>
          <div className='esquerda'>
            <div>
              <p className='produto' id='salgado'>Salgados</p>
            </div>
            <div className="body-detalhes">
              <div className="body-detalhes-div1"></div>
              <div className="body-detalhes-div2"></div>
              <div className="body-detalhes-div3"></div>
            </div>
            <div>
              <ul>
                <li></li>
              </ul>
            </div>
          </div>

          <div className='direita'>
            <div className="body-detalhesD">
              <div className="body-detalhes-div2"></div>
              <div className="body-detalhes-div3"></div>
              <div className="body-detalhes-div1"></div>
            </div>
            <div>
              <p className='produto' id='lanches'>Lanches</p>
            </div>
            <div>
              <ul>
                <li></li>
              </ul>
            </div>
          </div>

          <div className='esquerda'>
            <div>
              <p className='produto' id='pasteis'>Pasteis</p>
            </div>
            <div className="body-detalhes">
              <div className="body-detalhes-div3"></div>
              <div className="body-detalhes-div2"></div>
              <div className="body-detalhes-div1"></div>
            </div>
            <div className='lista-produto'>
              <ul>
                <li></li>
              </ul>
            </div>
          </div>

          <div className='direita'>
            <div className="body-detalhesD">
              <div className="body-detalhes-div3"></div>
              <div className="body-detalhes-div1"></div>
              <div className="body-detalhes-div2"></div>
            </div>
            <div>
              <p className='produto' id='tapioca-salgada'>Tapioca-Salgada</p>
            </div>
            <div>
              <ul>
                <li></li>
              </ul>
            </div>
          </div>

          <div className='esquerda'>
            <div>
              <p className='produto' id='tapioca-doce'>Tapioca-Doce</p>
            </div>
            <div className="body-detalhes">
              <div className="body-detalhes-div1"></div>
              <div className="body-detalhes-div3"></div>
              <div className="body-detalhes-div2"></div>
            </div>
            <div>
              <ul>
                <li></li>
              </ul>
            </div>
          </div>

          <div className='direita'>
            <div className="body-detalhesD">
              <div className="body-detalhes-div2"></div>
              <div className="body-detalhes-div1"></div>
              <div className="body-detalhes-div3"></div>
            </div>
            <div>
              <p className='produto' id='sucos'>Sucos</p>
            </div>
            <div>
              <ul>
                <li></li>
              </ul>
            </div>
          </div>

          <div className='esquerda'>
            <div>
              <p className='produto' id='refri'>Refri</p>
            </div>
            <div className="body-detalhes">
              <div className="body-detalhes-div3"></div>
              <div className="body-detalhes-div1"></div>
              <div className="body-detalhes-div2"></div>
            </div>
            <div>
              <ul>
                <li></li>
              </ul>
            </div>
          </div>

          <div className='direita'>
            <div className="body-detalhesD">
              <div className="body-detalhes-div2"></div>
              <div className="body-detalhes-div3"></div>
              <div className="body-detalhes-div1"></div>
            </div>
            <div>
              <p className='produto' id='pizza'>Pizza</p>
            </div>
            <div>
              <ul>
                <li></li>
              </ul>
            </div>
          </div>

          <div className='esquerda'>
            <div>
              <p className='produto' id='sobremesas'>Sobremesa</p>
            </div>
            <div className="body-detalhes">
              <div className="body-detalhes-div2"></div>
              <div className="body-detalhes-div1"></div>
              <div className="body-detalhes-div3"></div>
            </div>
            <div>
              <ul>
                <li></li>
              </ul>
            </div>
          </div>

          <div className='direita'>
            <div className="body-detalhesD">
              <div className="body-detalhes-div1"></div>
              <div className="body-detalhes-div3"></div>
              <div className="body-detalhes-div2"></div>
            </div>
            <div>
              <p className='produto' id='acai'>Açaí</p>
            </div>
            <div>
              <ul>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
        <div className='caixa'></div>
      </div>
    </div>
    );
}

export default Cardapio;
