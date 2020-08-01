import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/Carousel/components/FormField';

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
        //usando destructuring
        const {getAttribute, value} = event.target
        
        setValue(
            getAttribute('name'),
            value
        );
            
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
                <FormField 
                    values ={values.nome}
                    onChange={handleChange}
                    name='nome'
                    type='text'
                    label='Nome da categoria'
                />

                <FormField 
                    values ={values.descricao}
                    onChange={handleChange}
                    name='descricao'
                    type='text'
                    label='Descrição'
                />

                <FormField 
                    values ={values.cor}
                    onChange={handleChange}
                    name={'cor'}
                    type='color'
                    label='Cor'
                />
                
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