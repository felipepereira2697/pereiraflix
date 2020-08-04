import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/Carousel/components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

 function CadastroCategoria() {
     const valoresIniciais = {
         nome: '',
         descricao: '',
         cor: '#000'
    }

    const { values, handleChange, clearForm }  = useForm(valoresIniciais);
    const [categorias, setCategorias] = useState([]);
    

    // chamamos o useEffect quando queremos que algum efeito colateral aconteca, funcao de dois parametros
    useEffect(() => {
        //using javascript fetch
        const URL = 'http://localhost:3000/categorias';
        fetch(URL)
        .then( async (serverResponse) => {
            //can take a few moments
            const response = await serverResponse.json();
            setCategorias([...response]);
        });
        
    }, []);
     

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
                clearForm(valoresIniciais);
            }}>
                <FormField 
                    values ={values.nome}
                    onChange={handleChange}
                    name='nome'
                    type='text'
                    label='Nome da Categoria'
                />

                <FormField 
                    values ={values.descricao}
                    onChange={handleChange}
                    name='descricao'
                    type='textarea'
                    label='Descrição'
                />

                <FormField 
                    values ={values.cor}
                    onChange={handleChange}
                    name='cor'
                    type='color'
                    label='Cor'
                />
                
                <Button>Cadastrar </Button>
            </form>
            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                     <li key={`${categoria.nome}${indice}`}>
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