import React, { Children } from "react";
import { createContext } from "react";

export const produtos = createContext();

let nome = "Henrique";


const dadosProdutos = {
    nome
}

export default function ProdutosProvider({children}){
    return(
        <produtos.Provider value={dadosProdutos}>
            {children}
        </produtos.Provider>
    )
}