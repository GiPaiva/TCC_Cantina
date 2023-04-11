import axios from 'axios';
const API_BASE_URL = 'https://api-cantina-production.up.railway.app/api';
 

export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/produtos`, {
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
    const response = await axios.get(`${API_BASE_URL}/produtos/${categoria}`, {
      params:{
        key: '1363dc7316d70ecf0803a4bd24ac15ab'
      }
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};


export const createProduct = async (productData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/produtos`, productData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};


export const login = async (userName, senha) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/usuarios`, {
      userName,
      senha
    });
    return response.data.token;
  } catch (error) {
    console.error(error);
  }
};

export const getRestrictedData = async (token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/usuarios`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

