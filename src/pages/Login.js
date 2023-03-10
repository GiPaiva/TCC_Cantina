import Header from '../ui/components/Header';
import '../ui/styles/Login.css';

function Login() {
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div className='container'>
        <div className='caixa'></div>

        <div className='card-login'>
            <div id='login'>
              <h1 className='title'>Login</h1>
              <form className='form'>
                <div className='field'>
                  <label htmlFor='usuario'>Usuário</label>
                  <input type='usuario' name='usuario' id='usuario' />
                </div>
                <div className='field'>
                  <label htmlFor='password'>Senha</label>
                  <input type='password' name='password' id='password' />
                </div>

                  <div className='actions'>
                    <button type='submit'>Salvar</button>
                  </div>
              </form>
            </div>
        </div>
          
        <div className='caixa'></div>
      </div>
    </div>
    );
}

export default Login;
