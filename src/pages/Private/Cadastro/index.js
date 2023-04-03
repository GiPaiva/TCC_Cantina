import '../../../ui/styles/Cadastro.css';

function Cadastro(){
    return (
        <div>
            {/* Fiz algumas modificações apenas por conta que estava conflitando com as outras paginas */}
            <div className='container'>
                <div className="caixa"></div>
                <div className="card cadastro">
                    <div className="title1" id="">
                            <h1 className="title">Cadastro de Cliente</h1>
                            <br></br>
                            <br></br>
                        <div className="formulario">
                            {/* Formulário onde há a inserção das informações pelos inputs */}
                            <form action="" className="form-cadastro">
                            {/* Inputs e botão que usamos para fazer a inserção e entrega das informações pelos campos respectivos */}    
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