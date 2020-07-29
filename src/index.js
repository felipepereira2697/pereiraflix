import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// React router dom vem aqui
//para nos ajudar em como criar as rotas, qual pagina mostrar baseado na url, vamos usar o Switch e o Route
import { BrowserRouter, Route, Switch } from 'react-router-dom';


// Vai inicializar o React 

ReactDOM.render(

  // Em volta da nossa aplicacao devemos ter um sistema de roteamento, quando ela carregar devemos decidir qual pagina ela vai mostrar
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      
      {/* o ultimo componente declarado será executado caso nenhuma rota seja encontrada antes */}
      {/* jeito diferente de criar seu cmp */}

      <Route component={() => (<div>Error 404</div>)} />
    </Switch>
  </BrowserRouter>,
  // renderiza o react aqui dentro
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

