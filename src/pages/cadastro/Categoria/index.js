import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

 function CadastroCategoria() {
     const valoresIniciais = {
         nome: 'Categoria inicial',
         descricao: 'Essa é a descrição inicial',
         cor: '#000'
     }
    const [categorias, setCategorias] = useState([]);
     //abrindo oq esta vindo do array useState
    const [values, setValues] = useState(valoresIniciais); 

    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave] : valor, //nome : 'oNomeVemAqui'
        })
    }

    function handleChange(event) {
        //quem é o alvo da mudança que estamos fazendo
        const evtValue = event.target.value;
        setValue(event.target.getAttribute('name'),evtValue);
            
    }
    return (
        <PageDefault>
            <h1>Cadastro de categoria: {values.nome} </h1>
            <form onSubmit={function handleSubmit(event){
                event.preventDefault();
                //podemos espalhar nossas categorias com a nova categoria no mesmo elemento
                //...categorias --> pega tuido que vc ja tem e nao joga fora, só adiciona oq vou te passar 
                setCategorias([
                    ...categorias,
                    values
                ]);
                setValues(valoresIniciais);
            }}>
                <div>
                    <label>Nome da categoria
                        <input 
                            type="text" 
                            value={values.nome}
                            name = "nome"
                            onChange={handleChange}
                        /> 
                    </label>
                </div>
                <div>
                    <label>Descrição:
                        <textarea
                            type="text" 
                            name="descricao"
                            value={values.descricao}
                            onChange={handleChange}
                        /> 
                    </label>
                </div>  
                <div>
                    <label>Cor:
                        <input
                            type="color" 
                            value={values.cor}
                            name="cor"
                            onChange={handleChange}
                        /> 
                    </label>
                </div>
                <button>Cadastrar </button>
            </form>
            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                     <li key={`${categoria}${indice}`}>
                         {categoria.nome}
                     </li>

                    );
                })}
            </ul>
            <Link to="/">
                Ir para Home
            </Link>
        </PageDefault>    
    );
 }

 export default CadastroCategoria;