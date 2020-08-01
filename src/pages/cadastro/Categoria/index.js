import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

 function CadastroCategoria() {
    const [categorias, setCategorias] = useState(['Teste']);
     //abrindo oq esta vindo do array useState
    let [nomeDaCategoria, setNomeDaCategoria] = useState('Filmes'); 
    return (
        <PageDefault>
            <h1>Cadastro de categoria: {nomeDaCategoria} </h1>
            <form onSubmit={function handleSubmit(event){
                event.preventDefault();
                //podemos espalhar nossas categorias com a nova categoria no mesmo elemento
                //...categorias --> pega tuido que vc ja tem e nao joga fora, só adiciona oq vou te passar
                setCategorias([
                    ...categorias,
                    nomeDaCategoria
                ])
            }}>

                <label>Nome da categoria</label>
                <input 
                    type="text" 
                    value={nomeDaCategoria}
                    onChange={(event) => {
                        //quem é o alvo da mudança que estamos fazendo
                        const evtValue = event.target.value;
                        setNomeDaCategoria(evtValue);
                    }}
                />
                <button>Cadastrar </button>
            </form>
            <ul>
                {categorias.map((categoria) => {
                    return (
                     <li key={categoria}>
                         {categoria}
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