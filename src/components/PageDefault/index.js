import React from 'react';

import Menu from '../Menu';
import Footer from '../Footer';


function PageDefault(props) {
    return (
        // Todo componente deve ter uma estrutura em volta
        <div>

            <Menu />
                {props.children}
            <Footer />

        </div>

    );
}

export default PageDefault;