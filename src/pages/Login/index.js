import React, { useState } from 'react';
import '../../ui/styles/Login.css';
import { login } from '../../api/api';
import { useNavigate} from "react-router-dom";

function Login(props) {
  const [userName, setUserName] = useState('');
  const [senha, setSenha] = useState('');
  const history = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await login(userName, senha)
      // Handle the response here (e.g. store the JWT token)
      const token = response.data.token;
      console.log(token);
      localStorage.setItem('token', token);
      // Redirect to the listaproduto page
      history('/listaproduto');
    } catch (error) {
      console.error(error);
    }
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
