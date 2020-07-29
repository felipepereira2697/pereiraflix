import React from 'react';
// Para o comportamento de SPA
import { Link }  from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import './menu.css';
import Button from '../Button';
function Menu() {
    return (
        // Quando isso é muito simples, podemos usar o nav
        <nav className="Menu">
            <Link to="/">
                <img src={logo} className="Logo" alt="Pereiraflix logo"/>
            </Link>

            {/* Botao vai se comportar como um Link do React Roouter */}
           <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
           </Button>
        </nav>

    );
}

export default Menu;