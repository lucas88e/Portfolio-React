import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';

const Certificates = () =>(
    <div className="Certificates">
        <H2Styled name="Proyectos" />
        <div className="Certificates-container">
            <div className="Certificates-item">
                <H3Styled>Bazar de subastas Online</H3Styled>
                <PStyled name="Bazar de subastas online donde puedes ver los prodcutos registrarte y loguearte para poder pujar, tanto el BackEnd como el front en dos semanas "/>
                    <a href="https://proyect-final-front.pages.dev/">Proyecto</a>
            </div>
        </div>
    </div>
);

export default Certificates;