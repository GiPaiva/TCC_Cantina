import Produtos from "../../ui/components/Produtos/Produtos"
import Nav from "../../ui/components/Nav/Nav";

// Importação da estilização cardapio.css.
import '../../ui/styles/Cardapio.css';


function Cardapio(){
  return (
    <div>
      <div className='container view'>
        {/* Botões laterias que facilitam a procura por itens do cardápio */}
        <div className='caixa nav'>
          <Nav/>
        </div>
        <div className='card'>
          <Produtos/>
        </div>
      </div>
    </div>
  );
}

export default Cardapio;
