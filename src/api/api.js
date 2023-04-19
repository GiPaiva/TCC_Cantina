import axios from '.';

//Logout
export const Logout = () => {
  localStorage.clear();
}

//Rotas protegidas com key
//Rotas de Produtos (basico)
export const getProducts = async () => {
  try {
    const response = await axios.get(`/produtos`, {
      params:{
        key: '1363dc7316d70ecf0803a4bd24ac15ab'
      }
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getProductsByCategory = async (categoria) => {
  try {
    const response = await axios.get(`/produtos/${categoria}`, {
      params:{
        key: '1363dc7316d70ecf0803a4bd24ac15ab'
      }
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
//Rotas Usuarios
//Rota de login
export const login = async (userName, senha) => {
  try {
    const response = await axios.post(`/usuarios`, {
      userName,
      senha
    });
    console.log(response.data);
    return response.data.token;
  } catch (error) {
    console.error(error);
  }
};






//Rotas protegidas por Token
//Rotas Produtos
//Rota de cadastrar usuario
export const cadastraFun = async (userName, senha, confirmaSenha, token) => {
  try {
    const response = await axios.post(`/usuarios/cadastro`, {
      body: {
        userName,
        senha,
        confirmaSenha
      },
      headers:{
        Authorization: `Bearer ${token}`
      }
    });
    return response.data.token;
  } catch (error) {
    console.error(error);
  }
};
// Rota de atualizar produtos
export const EditProduto = async (id,nome, preco, categoria, descricao, token) => {
  try{
    const response = await axios.put(`/produtos/`, {
      body: {
        nome, preco, categoria, descricao,
      },
      params: {
        id
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response;
  }
  catch(error){
    console.error(error);
  }
}

// Rota de adicionar produtos
export const AddProduct = async (nome, preco, categoria, descricao, token) => {
  try {
    const response = await axios.post(`/produtos`, {
      body: {
        nome, preco, categoria, descricao,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// Rota de deletar produtos
export const DeleteProduto = async (id ,token) => {
  try {
    const response = await axios.post(`/produtos`, {
      params: {
        id
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}







//Rotas Compras
// Rota de pegar todas as compras
export const Compras = async (token) => {
  try {
    const response = await axios.get(`/compras`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.token;
  } catch (error) {
    console.error(error);
  }
};

// Rota para listar todas as compras de um cliente específico
export const ClienteCompras = async (numero, token) => {
  try {
    const response = await axios.get(`/compras`, {
      params: {
        numero
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.token;
  } catch (error) {
    console.error(error);
  }
};

// Rota de criar nova compra
export const AddCompras = async (id_cliente, compra, total, dataHora, token) => {
  try {
    const response = await axios.post(`/compras`, {
      body: {
        id_cliente, compra, total, dataHora
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.token;
  } catch (error) {
    console.error(error);
  }
};

// Rota de alterar a compra
export const EditCompra = async (id, id_cliente, compra, total, dataHora, numero, token) => {
  try {
    const response = await axios.put(`/compras`, {
      body: {
        id_cliente, compra, total, dataHora, numero
      },
      params: {
        id
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.token;
  } catch (error) {
    console.error(error);
  }
};

// Rota de excluir a compra
export const deleteCompra = async (id, token) => {
  try {
    const response = await axios.delete(`/compras`, {
      params: {
        id
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.token;
  } catch (error) {
    console.error(error);
  }
};

// Excluir todas as compras de um único cliente
export const AllDeleteCompraCliente = async (numero, token) => {
  try {
    const response = await axios.delete(`/compras/cliente/`, {
      params: {
        numero
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.token;
  } catch (error) {
    console.error(error);
  }
};






//Rotas Clientes
//Rota para cadastrar um cliente
export const CadastraClientes = async (nome, numero, token) => {
  try {
    const response = await axios.post(`/clientes`, {
      body: {
        nome, numero,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.token;
  } catch (error) {
    console.error(error);
  }
};

//Rota para listar todos os clientes
export const GetCliente = async (token) => {
  try {
    const response = await axios.get(`/clientes`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.token;
  } catch (error) {
    console.error(error);
  }
};

//Rota para listar cliente específico 
export const ClienteId = async (id, token) => {
  try {
    const response = await axios.get(`/clientes`, {
      params: {
        id
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.token;
  } catch (error) {
    console.error(error);
  }
};


//Rota para atualizar um cliente específico
export const compras = async (id, nome, numero, token) => {
  try {
    const response = await axios.put(`/clientes`, {
      body: {
        nome, numero,
      },
      params: {
        id
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.token;
  } catch (error) {
    console.error(error);
  }
};

//Rota para excluir um cliente específico
export const DeleteCliente = async (id ,token) => {
  try {
    const response = await axios.post(`/clientes`, {
      params: {
        id
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.token;
  } catch (error) {
    console.error(error);
  }
};