import { useState } from "react";
import { AddProduct } from "../../../api/api";
import '../../styles/Cardapio.css';

export default function FormularioAdd(){
    const [formvalue, setFormvalue] = useState({
        nome:'', 
        preco: 0,
        descricao:'', 
        categoria:'', 
    });

    const handleInput=(e)=>{
        const {name, value}= e.target;
        setFormvalue({...formvalue,[name]:value});
    }
    
    const handleSubmit = async(e)=>{
        e.preventDefault();
        
        const nome= formvalue.nome.toLowerCase();
        const descricao = formvalue.descricao.toLowerCase();
        const categoria =  formvalue.categoria.toLowerCase();
        const preco = formvalue.preco;

        AddProduct(nome, preco, categoria, descricao, token);
    }
    
    return (
        <div>
            <form className='from-prod-add' id='form' onSubmit={handleSubmit}>
                <input type="text" className='input-nome' name='nome' value={formvalue.nome} onChange={ handleInput} placeholder='nome...' pattern='^(?=*[a-z])' required/>
                <input type="text" className='input-descricao' name='descricao' value={formvalue.descricao} onChange={ handleInput} placeholder='descricao...' />
                <select className='input-datalist' list='categorias' name='categoria' value={formvalue.categoria} onChange={ handleInput} placeholder='categorias...' required>
                    <option value={'salgados'}>Salgados</option>
                    <option value={'lanches'}>Lanches</option>
                    <option value={'bebidas'}>Bebidas</option>
                    <option value={'pasteis'}>Pasteis</option>
                    <option value={'pizzas'}>Pizzas</option>
                    <option value={'tapiocassalgadas'}>Tapiocas Salgadas</option>
                    <option value={'tapiocasdoces'}>Tapiocas Doces</option>
                    <option value={'sobremesas'}>Sobremesas</option>
                    <option value={'acais'}>Açaís</option>
                    <option value={'pratosprontos'}>Pratos Prontos</option>
                    <option value={'porquilo'}>Por Quilo</option>
                </select>
                <span>R$</span>
                <input type="number" className='input-preco' name='preco' value={formvalue.preco} onChange={ handleInput} placeholder='0.00' />
                <button type='submit' className='btn-submit'>Salvar</button>
            </form>
        </div>
        
    )
}