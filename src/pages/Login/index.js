import React from 'react';
import '../../ui/styles/Login.css';
// Importamos a estilização login.css


function Login() {
  return (
    <div>
      <main className="container centro">
        <div className="informacoes">
          <div className="caixa-login">
          {/* Div caixa-login é o espaço onde inserimos o formulário com a requisição de senha e usuário */}
          <p className="titulo-login">Login</p>
            <div>
              {/* Formulário onde há a inserção das informações pelos inputs */}
              <form action="POST" className="form-login">
                {/* Inputs e botão que usamos para fazer a inserção e entrega das informações pelos campos respectivos */}
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
