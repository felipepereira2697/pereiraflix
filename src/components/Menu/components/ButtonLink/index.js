// Nesse caso podemos ter components dentro de components, nem todo component precisa ficar na raíz
import React from 'react';

function ButtonLink(props) {
    //props => {className : "valor passado"}
    console.log(props);
    return(
        <a href={props.href} className={props.className}>
            {/* perceba q nao definimos o children, foi o react q fez */}
            {props.children}
        </a>
    );
}

export default ButtonLink;