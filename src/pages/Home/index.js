import React, { useEffect, useState } from 'react';
import Menu from '../../components/Menu';
// import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import categoriesRepository from '../../repositories/categorias';
import PageDefault from '../../components/PageDefault';

function Home() {

  const [dadosIniciais, setDadosIniciais] = useState([]);
  useEffect(() => {
    categoriesRepository.getAllWithVideos()
    .then((categoriasComVideos) => {
      setDadosIniciais(categoriasComVideos);
    })
    .catch((err) => {
      console.log(err.message);
    });
  }, []);

  return (
    <PageDefault>
      <Menu />
      {JSON.stringify(dadosIniciais)}
      {/* <BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-End? Trabalhando na área"}
      />

      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel 
            ignoreFirstVideo
            category={dadosIniciais.categorias[1]}
      />

      <Carousel 
            ignoreFirstVideo
            category={dadosIniciais.categorias[2]}
      />

      <Carousel 
            ignoreFirstVideo
            category={dadosIniciais.categorias[3]}
      /> */}

      

    </PageDefault>
  );
}

export default Home;
