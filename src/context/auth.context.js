//Puxar token de validação
//Verificação do Token no LocalStorage --> envio dele na requisição
//Salvar token no LocalStorage --> envio dele nas próximas requisições


import { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();


export default function AuthProvider ({ children }) {

    const [name, setName] = useState('Heitor');

    // const salvaToken = async (token) => {
    //     try {
    //         const tokenSalvo = localStorage.setItem('token', token);

    //         if(tokenSalvo){
    //             console.log("Token salvo com sucesso.");
    //             return "Token salvo no LocalStorage.";
    //         }
    //         }
    //         catch (error) {
    //         console.log("Erro ao salvar o token no localStorage: " + error);
    //         return "Erro ao salvar o Token";
    //     }
    // };

    const geraToken = async (userName, senha) => {
        try {
            const resposta = await axios.post('https://api-cantina-production.up.railway.app/api/usuarios/', { userName, senha });
            const token = resposta.data.token;

                if(token !== undefined){
                    console.log("Usuário encontrado, salvando no LocalStorage.");

                    try {
                        localStorage.setItem('token', token);
                        console.log("Token salvo com sucesso.");
                        
                        return true;

                    } catch (error) {
                        console.log("Erro ao salvar o token no localStorage: " + error);
                        return "Erro ao salvar o Token";
                    }
                    
                }

        } catch (error) {
            console.log("Acesso negado: informações inválidas."+ error);
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