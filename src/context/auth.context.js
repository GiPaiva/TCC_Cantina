//Puxar token de validação
//Verificação do Token no LocalStorage --> envio dele na requisição
//Salvar token no LocalStorage --> envio dele nas próximas requisições


import { createContext, useState } from "react";

export const AuthContext = createContext();


export default function AuthProvider ({ children }) {

    const [name, setName] = useState('Heitor');

    const geraToken = async () => {};

    return(
        <AuthContext.Provider value={name}>
            { children }
        </AuthContext.Provider>
    )
};