import Header from '../../ui/components/Header/Header';
import '../../ui/styles/Login.css';

function Login() {
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <main class="container">
        <div class="informacoes">
          <div class="caixa-login">
          <p class="titulo-login">Login</p>
            <div class="formulario">
              <form action="" class="form-login">
                <input class="input" type="text" name="username" id="username" placeholder="Username"/>
                <input class="input" type="password" name="senha" id="senha" placeholder="•••••••"/>
                <button class="btn-login" type="submit">Entrar</button>
              </form>
            </div>
          </div>
        </div>
      </main>  
      <div className='caixa'></div>
    </div>
  );
}

export default Login;



