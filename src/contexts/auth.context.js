//Puxar token de validação
//Verificação do Token no LocalStorage --> envio dele na requisição
//Salvar token no LocalStorage --> envio dele nas próximas requisições

import { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();


export default function AuthProvider ({ children }) {

    const baseUrl = "api";

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

    const verificaLocalStorage = () => {
        //Puxa o token do LocalStorage
        try {
            const token = localStorage.getItem('token');
            if(token){
                console.log('Token encontrado com êxito.');
                return true;
            }
        } catch (error) {
            console.log('Token não encontrado. Um erro aconteceu: ' + error);
            return false;
        }
    };

    const request = async (params, method, dados) => {
        const token = localStorage.getItem('token');

        if(!params || !method){
            console.log('Faltam dados. Verifique se a rota e método estão sendo enviados.');
            return false;
        }

        if(typeof params !== 'string' || typeof method !== 'string'){
            console.log('Tipo dos dados incorretos. Verifique se a rota enviada e/ou o método são do tipo string.')
            return false;
        }

        const url = baseUrl + params;

        switch (method) {
            case 'GET':
                await axios.get()
                break;
            case 'POST':
                break;
            case 'PUT':
                break;
            case 'DELETE':
                break;
            default:
                console.log('Método não enviado. Impossível realizar a requisição.');
        }

        if (!dados){
            await axios.method()
        } 
    };


    return(
        <AuthContext.Provider value={{ geraToken, request, verificaLocalStorage }}>
            { children }
        </AuthContext.Provider>
    )
};