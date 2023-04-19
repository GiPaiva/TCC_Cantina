import { Routes, Route, BrowserRouter } from "react-router-dom";

import AuthProvider from "./context/auth.context.js";

// Importação dos itens Cardapio, Login e Cadastro que serão renderizados nas rotas
import Home from "./pages/Home/index.js";
import Login from "./pages/Login/index.js";
import Cadastro from "./pages/Cadastro/index.js";
import ListaProduto from "./pages/ListProd/ListProd.js";
import Detalhes from "./pages/Home/detalhes.js";
import Cardapio from "./pages/Home/Cardapio.js";
import Compra from "./pages/Compra/Compra.js";
import Funcionario from "./pages/CadastroFunc/Funcionario.js";

export default function Rotas() {
  return (
    <BrowserRouter>
      {/* Dentro do componente "Routes", são definidas as rotas da aplicação usando o componente "Route".
            Cada rota é definida através do atributo "path" que indica o caminho da rota e o atributo "element"
            que indica qual componente deve ser renderizado quando a rota for acessada. */}
        <AuthProvider>
            <Routes>
                {/* Logo se o atributo path houver apenas a barra seguirá para o cardápio, se houver o nome da respectiva após seguirá para a mesma */}
                <Route path="/" element={<Home />} />
                <Route path="/detalhes" element={<Detalhes />} />
                <Route path="/cardapio" element={<Cardapio />} />
                <Route path="/login" element={<Login />} />
                <Route path="/compra" element={<Compra />} />
                <Route path="/listaproduto" element={<ListaProduto />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/funcionario" element={<Funcionario />} />
            </Routes>
        </AuthProvider>
    </BrowserRouter>
  );
}
