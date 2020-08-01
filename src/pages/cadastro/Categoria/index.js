import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/Carousel/components/FormField';
import Button from '../../../components/Button';

 function CadastroCategoria() {
     const valoresIniciais = {
         nome: '',
         descricao: '',
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

    function handleChange(infosDoEvento) {
        //quem é o alvo da mudança que estamos fazendo
        //usando destructuring
        const { name, value } = infosDoEvento.target;
        setValue(name, value);
            
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