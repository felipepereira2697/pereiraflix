import React from 'react';
import logo from '../../assets/img/logo.png';
import './menu.css';
import ButtonLink from './components/ButtonLink';
function Menu() {
    return (
        // Quando isso é muito simples, podemos usar o nav
        <nav className="Menu">
            <a href="/">
                <img src={logo} className="Logo" alt="Pereiraflix logo"/>
            </a>

           <ButtonLink className="ButtonLink" href="/">
                Novo vídeo
           </ButtonLink>
        </nav>

    );
}

export default Menu;