import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

 function CadastroCategoria() {
     //abrindo oq esta vindo do array useState
    let [nomeDaCategoria, setNomeDaCategoria] = useState('Filmes'); 
    return (
        <PageDefault>
            <h1>Cadastro de categoria: {nomeDaCategoria} </h1>
            <form action="">

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

            <Link to="/">
                Ir para Home
            </Link>
        </PageDefault>    
    );
 }

 export default CadastroCategoria;