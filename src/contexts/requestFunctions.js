import axios from "axios";

const requestFunctions = {

    getRequest : async (url) => {
        try {
            const response = await axios.get(url);
            if(response){
                console.log('Operação bem sucedida.');
                return response;
            }

        } catch (error) {
            console.log('Erro na requisição: ' + error);
            return false;
        }
    },

    postRequest : async (url) => {
        try {
            const response = await axios.post(url);
            if(response){
                console.log('Operação bem sucedida.');
                return response;
            }

        } catch (error) {
            console.log('Erro na requisição: ' + error);
            return false;
        }
    },

    putRequest : async (url) => {
        try {
            const response = await axios.put(url);
            if(response){
                console.log('Operação bem sucedida.');
            }

        } catch (error) {
            console.log('Erro na requisição: ' + error);
            return false;
        }
    },

    deleteRequest : async (url) => {
        try {
            const response = await axios.delete(url);
            if(response){
                console.log('Operação bem sucedida.');
            }

        } catch (error) {
            console.log('Erro na requisição: ' + error);
            return false;
        }
    }
};

module.exports = requestFunctions;