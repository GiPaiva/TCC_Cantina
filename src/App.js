import React from 'react';

import Header from './ui/components/Header/Header';
import Rotas from './routes';

// Importação do item reset.css que faz a padronização de estilos dos navegadores
import './ui/styles/reset.css';

export default function App() {
  return (
    <div>
      <Header/>
      <Rotas/>
    </div>
  );
}