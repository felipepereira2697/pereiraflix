import config from '../config';

function getAllWithVideos() {
    //using javascript fetch
    //http://localhost:3000/categorias?_embed=videos
    const URL = config.URL;
    //como o fetch retorna uma promise, podemos usar o then
    return fetch(`${URL}categorias?_embed=videos`)
    .then( async (serverResponse) => {
        //can take a few moments
        //checar se o server ta up
        if(serverResponse.ok) {

            const response = await serverResponse.json();
            return response;
        }
        throw new Error('Deu ruim no servidor');
    });
    
}

function getAll() {
    //using javascript fetch
    //http://localhost:3000/categorias?_embed=videos
    const URL = config.URL;
    //como o fetch retorna uma promise, podemos usar o then
    return fetch(`${URL}categorias`)
    .then( async (serverResponse) => {
        //can take a few moments
        //checar se o server ta up
        if(serverResponse.ok) {

            const response = await serverResponse.json();
            return response;
        }
        throw new Error('Deu ruim no servidor');
    });
    
}

export default {
    getAllWithVideos, getAll,
}