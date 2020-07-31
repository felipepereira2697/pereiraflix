import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

 function CadastroCategoria() {
    return (
        <PageDefault>
            <h1>Cadastro de categoria </h1>
            <form action="">

                <label>Nome da categoria</label>
                <input type="text" name="" id=""/>
                <button>Cadastrar</button>
            </form>

            <Link to="/">
                Ir para Home
            </Link>
        </PageDefault>    
    );
 }

 export default CadastroCategoria;