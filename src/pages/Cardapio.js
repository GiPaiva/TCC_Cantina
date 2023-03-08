import Header from '../ui/components/Header';
import '../ui/styles/Cardapio.css';

function Cardapio() {
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div className='container'>
        {/* <div className='links'></div> */}
        <div className='card'>
          <div className='esquerda'>
            <div>
              <p className='produto'>Salgados</p>
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
              <p className='produto'>Lanches</p>
            </div>
          </div>

          <div className='esquerda'>
            <div>
              <p className='produto'>Pasteis</p>
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
              <p className='produto'>Tapioca-Salgada</p>
            </div>
          </div>

          <div className='esquerda'>
            <div>
              <p className='produto'>Tapioca-Doce</p>
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
              <p className='produto'>Sucos</p>
            </div>
          </div>

          <div className='esquerda'>
            <div>
              <p className='produto'>Refri</p>
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
              <p className='produto'>Pizza</p>
            </div>
          </div>

          <div className='esquerda'>
            <div>
              <p className='produto'>Sobremesa</p>
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
              <p className='produto'>Açaí</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Cardapio;
