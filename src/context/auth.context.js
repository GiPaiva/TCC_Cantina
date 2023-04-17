//Puxar token de validação
//Verificação do Token no LocalStorage --> envio dele na requisição
//Salvar token no LocalStorage --> envio dele nas próximas requisições


import { createContext, useState } from "react";
import axios from "../api/index";

export const AuthContext = createContext();


export default function AuthProvider ({ children }) {

    const [name, setName] = useState('Heitor');

    const geraToken = async (userName, senha) => {
        try {
            const resposta = await axios.post('/usuarios', { userName, senha });
            const token = resposta.data.token;

           try {
            const tokenSalvo = await localStorage.setItem('token', token);
            if(tokenSalvo){
                console.log("Token salvo com sucesso.");
                return true;
                
            }} 
            catch (error) {
            console.log("Erro ao salvar o token no localStorage: " + error);
            return false;
        }

        } catch (error) {
            console.log("Erro ao fazer login: " + error);
            return false;
        }
    };

    const request = async () => {};

    return(
        <AuthContext.Provider value={{ geraToken, request }}>
            { children }
        </AuthContext.Provider>
    )
};