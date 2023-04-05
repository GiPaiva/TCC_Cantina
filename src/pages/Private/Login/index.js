import React, { useState } from 'react';
// Importamos a estilização login.css
import '../../../ui/styles/Login.css';
import { login } from '../../../api/api';


function Login() {
  const [username, setUsername]  = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    const token = await login(username, password);
    console.log('Access token:', token);
  };

  return (
    <div>
      <main className="container centro">
        <div className="informacoes">
          <div className="caixa-login">
          {/* Div caixa-login é o espaço onde inserimos o formulário com a requisição de senha e usuário */}
          <p className="titulo-login">Login</p>
            <div>
              {/* Formulário onde há a inserção das informações pelos inputs */}
              <form className="form-login" onSubmit={handleLogin}>

                {/* Inputs e botão que usamos para fazer a inserção e entrega das informações pelos campos respectivos */}
                <input 
                  type="text"
                  className="input" 
                  placeholder="Username"
                  name="username" 
                  id="username" 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)}
                />
                
                <input 
                  className="input" 
                  type="password"
                  placeholder="•••••••"
                  name="senha" 
                  id="senha"
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button className="btn-login" type="submit">Entrar</button>
              </form>
            </div>
          </div>
        </div>
      </main>  
      <div classNameName='caixa'></div>
    </div>
  );
}

export default Login;
