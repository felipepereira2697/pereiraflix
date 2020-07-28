import React from 'react';
import logo from '../../assets/img/logo.png';
import './menu.css';
import Button from '../Button';
function Menu() {
    return (
        // Quando isso é muito simples, podemos usar o nav
        <nav className="Menu">
            <a href="/">
                <img src={logo} className="Logo" alt="Pereiraflix logo"/>
            </a>

            {/* Botao vai se comportar como um link usando o as="a" */}
           <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
           </Button>
        </nav>

    );
}

export default Menu;