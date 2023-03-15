import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

import Cardapio from './pages/Cardapio/index.js';
import Login from './pages/Login/index.js';
import Cadastro from './pages/Cadastro/Cadastro.js';

import './ui/styles/reset.css';

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Cardapio />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cadastro' element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;