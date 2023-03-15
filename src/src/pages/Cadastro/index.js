import Header from "../../ui/components/Header/Header";
import '../../ui/styles/Cadastro.css';

function Cadastro(){
    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div class="container">
                    <div class="title1">
                            <h1 class="title">Cadastro de Cliente</h1>
                        <div class="formulario">
                            <form action="" class="form-cadastro">
                            <input class="inputt" type="text" name="username" id="username" placeholder="Nome"/>
                            <input class="inputt" type="telefone" name="telefone" id="telefone" placeholder="Telefone"/>
                            <button class="btn-cadastro" type="submit">Salvar</button>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
    )
}

export default Cadastro;