import React from 'react';

//Header componente que será renderizado em todas as páginas
import Header from './ui/components/Header/Header';
//Rotas das Paginas
import Rotas from './routes';

//Importação do item reset.css que faz a padronização de estilos dos navegadores
import './ui/styles/reset.css';
import { AuthProvider } from './context/auth.context';

let token = localStorage.getItem("token");
token = JSON.parse(token);

export default function App() {
  return (
    <div>
      <Header/>
      <AuthProvider userData={token}>
        <Rotas/>
      </AuthProvider>
    </div>
  );
}