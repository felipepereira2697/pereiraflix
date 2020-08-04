import React from 'react';

import Menu from '../Menu';
import Footer from '../Footer';
import styled, {css} from 'styled-components';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white );
    flex:1;
    padding-top: 50px;
    padding-right: 5%;
    padding-left: 5%;
    ${( {paddingAll} ) =>  css`
        padding:  ${paddingAll};
    ` }
`;

function PageDefault(props) {
    return (
        // Todo componente deve ter uma estrutura em volta
        // <> chamamos de fragment
        <>

            <Menu />
                <Main paddingAll ={props.paddingAll}>
                     {props.children}
                </Main>
            <Footer />

        </>

    );
}

export default PageDefault;