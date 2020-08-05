import React, {useState, useEffect} from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link, useHistory } from 'react-router-dom';
import FormField from '../../../components/Carousel/components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

 function CadastroVideo() {
     const history = useHistory();
     const [categorias, setCategorias] = useState([])
     const { values, handleChange } = useForm({
         titulo: 'Pelé GOAT',
         url: 'https://www.youtube.com/watch?v=WXg8P0u9W9I',
         categoria: 'Front End'
     });

     useEffect(() => {
        categoriasRepository
        .getAll() 
        .then((categorias) => {

            setCategorias(categorias);
        })
     },[]);
    return (
        <PageDefault>
            <h1>Título de vídeo </h1>
            
            <form onSubmit={(event) => {
                event.preventDefault();

                const categoriaEscolhida = categorias.find((categoria) => {
                    return categoria.titulo === values.titulo
                })

                videosRepository.create({
                    titulo : values.titulo,
                    url : values.url,
                    categoriaId : categoriaEscolhida.Id,
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
                    suggestions={
                        [
                            'Front End',
                            'Back End',
                            'Data Science'
                        ]
                    }
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