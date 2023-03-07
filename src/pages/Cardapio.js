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
              <p className='salgado'>Salgados</p>
            </div>
            <div className="header-detalhesC">
              <div className="header-detalhes-div1"></div>
              <div className="header-detalhes-div2"></div>
              <div className="header-detalhes-div3"></div>
            </div>
          </div>
          {/* <div className='direita'></div>
          <div className='Lanches'></div>
          <div className='Pasteis'></div>
          <div className='Tapioca-Salgada'></div>
          <div className='Tapioca-Doce'></div>
          <div className='Sucos'></div>
          <div className='Refri'></div>
          <div className='Pizza'></div>
          <div className='Sobremesa'></div>
          <div className='Açaí'></div> */}
        </div>
      </div>
    </div>
    );
}

export default Cardapio;
