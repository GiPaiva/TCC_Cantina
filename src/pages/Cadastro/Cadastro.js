import Header from "../../ui/components/Header/Header";
import '../../ui/styles/Cadastro.css';

function Cadastro(){
    return (
        <div>
            <div>
                <Header></Header>
            </div>
            {/* Fiz algumas modificações apenas por conta que estava conflitando com as outras paginas */}
            <div className='container'>
                <div className="caixa"></div>
                <div className="card cadastro">
                    <div className="title1" id="title">
                            <h1 className="title">Cadastro de<br></br> Cliente</h1>
                            <br></br>
                            <br></br>
                        <div className="formulario">
                            <form action="" className="form-cadastro">
                            <input className="inputt" type="text" name="username" id="username" placeholder="Nome"/>
                            <input className="inputt" type="telefone" name="telefone" id="telefone" placeholder="Telefone"/>
                            </form>
                        </div>
                        <br/>
                        <button className="btn-cadastro" type="submit">Salvar</button>
                    </div>
                </div>
                <div className="caixa"></div>
            </div>
        </div>

    )
}

export default Cadastro;
