import React from 'react';
import Header from '../../ui/components/Header/Header';
import '../../ui/styles/Login.css';

function Login() {
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <main className="container centro">
        <div className="informacoes">
          <div className="caixa-login">
          <p className="titulo-login">Login</p>
            <div>
              <form action="POST" className="form-login">
                <input className="input" type="text" name="username" id="username" placeholder="Username"/>
                <input className="input" type="password" name="senha" id="senha" placeholder="•••••••"/>
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



