import React, { useState, useContext } from 'react';
import '../../ui/styles/Login.css';
import { login } from '../../api/api';
import { useNavigate} from "react-router-dom";
import { AuthContext } from '../../context/auth.context';

function Login(props) {
  const [userName, setUserName] = useState('');
  const [senha, setSenha] = useState('');
  const history = useNavigate();

  const { geraToken, salvaToken } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // try {
    //   const response = await login(userName, senha)
    //   // Handle the response here (e.g. store the JWT token)
    //   const token = response;
    //   console.log(token);
    //   localStorage.setItem('token', token);
    //   // Redirect to the listaproduto page
    
    // } catch (error) {
    //   console.error(error);
    // }
    const validaToken = async () => {
      const response = await geraToken(userName, senha);

      if(response === false){
        console.log("Usuário ou senha incorret(os).");
      } else {
        
        history('/listaproduto');
      }

    };

    validaToken();
  

    // try {
    //   history('listaproduto');
    // } catch (error) {
    //   console.log("Erro ao logar: " + error);
    // }
    
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
