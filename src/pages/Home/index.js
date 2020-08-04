import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriesRepository from '../../repositories/categorias';
import PageDefault from '../../components/PageDefault';

function Home() {

  const [dadosIniciais, setDadosIniciais] = useState([]);
  useEffect(() => {
    categoriesRepository.getAllWithVideos()
    .then((categoriasComVideos) => {
      console.log(categoriasComVideos);
      setDadosIniciais(categoriasComVideos);
    })
    .catch((err) => {
      console.log(err.message);
    });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      
      {dadosIniciais.length === 0 && (<div>Loading...</div>)}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription={dadosIniciais[0].videos[0].description}
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

      {/* <Carousel 
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
