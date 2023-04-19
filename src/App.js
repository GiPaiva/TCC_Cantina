import React from 'react';

//Header componente que será renderizado em todas as páginas
import Header from './ui/components/Header/Header';
//Rotas das Paginas
import Rotas from './routes';
// import AuthContextProvider from './context/auth.context';

//Importação do item reset.css que faz a padronização de estilos dos navegadores
import './ui/styles/reset.css';


export default function App() {
  return (
    <div> 
    {/* <AuthContextProvider> */}
      <Header/>
      <Rotas/>
    {/* </AuthContextProvider> */}
    </div>
  );
}