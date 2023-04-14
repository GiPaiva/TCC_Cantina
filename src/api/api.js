import axios from '.';

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

export const login = async (userName, senha) => {
  try {
    const response = await axios.post(`/usuarios`, {
      userName,
      senha
    });
    return response.data.token;
  } catch (error) {
    console.error(error);
  }
};

export const editProduto = async (id, token) => {
  try{
    const response = await axios.put(`/produtos/${id}`, {
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


export const createProduct = async (productData, token) => {
  try {
    const response = await axios.post(`/produtos`, productData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};


// export const Auth = async (local,token) => {
//   try {
//     const response = await axios.post(`/`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// };

