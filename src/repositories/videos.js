import config from '../config';

function create(objetoDoVideo) {
    //using javascript fetch
    //http://localhost:3000/categorias?_embed=videos
    const URL = config.URL;
    //como o fetch retorna uma promise, podemos usar o then
    return fetch(`${URL}videos`, {
        method: 'POST',
        headers: {
            'Content-type' : 'application/json',

        },
        body : JSON.stringify(objetoDoVideo),

    })
    .then( async (serverResponse) => {
        //can take a few moments
        //checar se o server ta up
        if(serverResponse.ok) {

            const response = await serverResponse.json();
            return response;
        }
        throw new Error('Não foi possível cadastrar dados ');
    });
    
}

export default {
    create,
}