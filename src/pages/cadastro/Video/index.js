import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link, useHistory } from 'react-router-dom';
import FormField from '../../../components/Carousel/components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';

 function CadastroVideo() {
     const history = useHistory();
     const { values, handleChange } = useForm({
         titulo: 'Vídeo padrao',
         url: 'https://batatinhanicemovie.potato',
         categoria: 'Front End'
     });
    return (
        <PageDefault>
            <h1>Título de vídeo </h1>
            
            <form onSubmit={(event) => {
                event.preventDefault();
                history.push('/');
            }}>
                
                <FormField
                    values ={values.titulo}
                    onChange={handleChange}
                    name='titulo'
                    type='text'
                    label='Título do Vídeo'
                />

                <FormField
                    values ={values.url}
                    onChange={handleChange}
                    name='url'
                    type='text'
                    label='URL'
                />
                <FormField
                    values ={values.categoria}
                    onChange={handleChange}
                    name='categoria'
                    type='text'
                    label='Categoria do Vídeo'
                />


                <Button type="submit">
                    Cadastrar
                </Button>
            </form>
            <Link to="/cadastro/categoria">
                Cadastrar Video
            </Link>
        </PageDefault>    
    );
 }

 export default CadastroVideo;