import { getProducts } from "../../../api/api";
import { useEffect, useState } from "react";
import '../../styles/Cardapio.css'

export default function FormularioAdd(){
    const [formvalue, setFormvalue] = useState({
        nome:'', 
        preco: 0,
        descricao:'', 
        categoria:'', 
      });
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getProducts();
            setProducts(data);
        };
        fetchData();
    }, []);

    const handleInput=(e)=>{
        const {name, value}= e.target;
        setFormvalue({...formvalue,[name]:value});
    }
    
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const allInputsValue = {
            nome: formvalue.nome.toLowerCase(),
            descricao: formvalue.descricao.toLowerCase(),
            categoria: formvalue.categoria.toLowerCase(),
            preco: formvalue.preco
        };
        console.log(allInputsValue);
    
        //precisa do token
        // let resp = await fetch('https://api-cantina-production.up.railway.app/api/produtos', {
        //   method: 'POST',
        //   headers: {
        //       'Content-Type': 'application/json'
        //   },
        //   mode: 'cors'
        // });
    }
    
    return (
        <div>
            <form className='from-prod-add' id='form' onSubmit={handleSubmit}>
                <input type="text" className='input-nome' name='nome' value={formvalue.nome} onChange={ handleInput} placeholder='nome...' pattern='^(?=*[a-z])' required/>
                <input type="text" className='input-descricao' name='descricao' value={formvalue.descricao} onChange={ handleInput} placeholder='descricao...' />
                <input className='input-datalist' list='categorias' name='categoria' value={formvalue.categoria} onChange={ handleInput} placeholder='categorias...' required/>
                <datalist id='categorias'>
                {
                    products.map((uDados)=>(
                        <option className='options-categoria' id='categoria' name='categoria'>{uDados.categoria}</option>
                    ))
                }
                </datalist>
                <span>R$</span>
                <input type="number" className='input-preco' name='preco' value={formvalue.preco} onChange={ handleInput} placeholder='0.00'/>
                <button type='submit' className='btn-submit'>Salvar</button>
            </form>
        </div>
        
    )
}