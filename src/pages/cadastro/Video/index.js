import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link, useHistory } from 'react-router-dom';
import FormField from '../../../components/Carousel/components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';

 function CadastroVideo() {
     const history = useHistory();
     const { values, handleChange } = useForm({
         titulo: 'Ronaldo R9',
         url: 'https://www.youtube.com/watch?v=Lu-IsHvTptk',
         categoria: 'Front End'
     });
    return (
        <PageDefault>
            <h1>Título de vídeo </h1>
            
            <form onSubmit={(event) => {
                event.preventDefault();
                videosRepository.create({
                    titulo : values.titulo,
                    url : values.url,
                    categoriaId : 1,
                })
                .then(() => {
                    history.push('/');
                });
                
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