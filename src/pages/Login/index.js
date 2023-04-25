import React, { useState, useContext } from 'react';
import '../../ui/styles/Login.css';
import { useNavigate} from "react-router-dom";
import { AuthContext } from "../../contexts/auth.context";

function Login(props) {
  const [userName, setUserName] = useState('');
  const [senha, setSenha] = useState('');
  const history = useNavigate();

  const { geraToken } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    //Prevenindo que o formulário seja recarregado automaticamente, recarregando a página e assim, perdendo os dados
    event.preventDefault();

    //função que valida o nome e senha inseridos pelo usuário
    const validaToken = async () => {
      const response = await geraToken(userName, senha);

      if(response === false){
        console.log("Usuário ou senha incorret(os).");
      } else {
        
        history('/listaproduto');
      }

    };

    validaToken();
  };

  return (
    <div >
      <main className="container centro">
        <div className="informacoes">
          <div className="caixa-login">
            <p className="titulo-login">Login</p>
            <div>
              <form className="form-login" onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="input"
                  placeholder="Username"
                  name="username"
                  id="username"
                  value={userName}
                  onChange={(event) => setUserName(event.target.value)}
                  autoFocus
                  required
                />
                <input
                  className="input"
                  type="password"
                  placeholder="•••••••"
                  name="password"
                  id="password"
                  value={senha}
                  onChange={(event) => setSenha(event.target.value)}
                  required
                />
                <button className="btn-login" type="submit">
                  Entrar
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;
