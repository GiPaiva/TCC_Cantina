import axios from 'axios';

const API_BASE_URL = 'https://api-cantina-production.up.railway.app/api';
const key = '?key=1363dc7316d70ecf0803a4bd24ac15ab';

export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/produtos${key}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createProduct = async (productData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/products`, productData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};


// export function addNewUser(newUser) {
//
//   axios.post(url, newUser)
//     .then(response => {
//       alert(JSON.stringify(response.data))
//       getUsers()
//     })
//     .catch(error => console.error(error));
// }
//
// export function updateUser(user, id) {
//   axios.put(`${url}/${id}`, user)
//     .then(response => {
//       alert(JSON.stringify(response.data))
//       getUsers()
//     })
//     .catch(error => console.error(error));
// }
//
// export function deleteUser(id) {
//   axios.delete(`${url}/${id}`)
//     .then(response => {
//       alert(JSON.stringify(response.data))
//       getUsers()
//     })
//     .catch(error => console.error(error));
// }
//
//calls
// getUsers()
// getUser()
