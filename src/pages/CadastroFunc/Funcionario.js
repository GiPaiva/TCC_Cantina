import '../../ui/styles/Funcionario.css';
import { useState } from 'react';
import { cadastraFun } from '../../api/api';

function Funcionario(){
    const [formvalue, setFormvalue] = useState({
        userName: '',
        senha: '',
        confirmaSenha: '',
    });

    const handleInput=(e)=>{
        const {name, value}= e.target;
        setFormvalue({...formvalue,[name]:value});
    }
    
    const handleSubmit = async(e)=>{
        e.preventDefault();

        const nome = formvalue.nome.toLowerCase();
        const senha = formvalue.senha.toLowerCase();
        const confirmaSenha = formvalue.confirmaSenha.toLowerCase();

        cadastraFun(nome, senha, confirmaSenha, token);
    }


    return (
        <div>
            {/* Fiz algumas modificações apenas por conta que estava conflitando com as outras paginas */}
            <div className='container'>
                <div className="caixa"></div>
                <div className="card cadastro">
                    <div className="title1" id="">
                            <h1 className="title">Cadastro de Funcionário</h1>
                            <br></br>
                            <br></br>
                        <div className="formulario">
                            {/* Formulário onde há a inserção das informações pelos inputs */}
                            <form action="" className="form-cadastro" onSubmit={handleSubmit}>
                            {/* Inputs e botão que usamos para fazer a inserção e entrega das informações pelos campos respectivos */}    
                                <input className="inputt" type="text" name="userName" id="userName" placeholder="Nome" onChange={ handleInput} value={formvalue.userName}/>
                                <input className="inputt" type="text" name="senha" id="senha" placeholder="Senha" onChange={ handleInput} value={formvalue.senha}/>
                                <input className="inputt" type="text" name="confimaSenha" id="confirmaSenha" placeholder="Confirma Senha" onChange={ handleInput} value={formvalue.confirmaSenha}/>
                            </form>
                        </div>
                        <br/>
                        <button className="btn-cadastro" type="submit" onSubmit={handleSubmit}>Salvar</button>
                    </div>
                </div>
                <div className="caixa"></div>
            </div>
        </div>

    )
}

export default Funcionario;
