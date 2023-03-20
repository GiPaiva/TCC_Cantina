import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

import Cardapio from './pages/Cardapio/index.js';
import Login from './pages/Login/index.js';
import Cadastro from './pages/Cadastro/Cadastro.js';
// Importação dos itens Cardapio, Login e Cadastro que serão renderizados nas rotas

import './ui/styles/reset.css';
// Importação do item reset.css que faz a padronização de estilos dos navegadores

const Rotas = () => {
  return (
    <BrowserRouter>
    {/* Dentro do componente "Routes", são definidas as rotas da aplicação usando o componente "Route". 
    Cada rota é definida através do atributo "path" que indica o caminho da rota e o atributo "element" 
    que indica qual componente deve ser renderizado quando a rota for acessada. */}
      <Routes>
        {/* Logo se o atributo path houver apenas a barra seguirá para o cardápio, se houver o nome da respectiva após seguirá para a mesma */}
        <Route path='/' element={<Cardapio />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cadastro' element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;