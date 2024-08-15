import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';

const Education = () => (
    <div className="Education">
        <H2Styled name="Estudios" />
        <div className="Education-container">
            <div className="Education-item">
                <H3Styled>Desarrollador Full Stack The Bridge Academy 
                    <span> Feb 2024 - Sep 2024</span>
                </H3Styled>
                <PStyled name="En los últimos seis meses, he desarrollado una pasión intensa por la programación, dedicándome a proyectos semanales que me han permitido adquirir sólidas habilidades en desarrollo web. Estoy motivado por la resolución de problemas y mantengo un enfoque constante en encontrar soluciones efectivas. Estoy listo para aportar mi energía y conocimientos a un equipo que valore la dedicación y la innovación."/>
            </div>
            <div className="Education-item">
                <H3Styled>Técnico Superior Administración Finanzas y Contabilidad
                    <span>  2016 - Sep 2018</span>
                </H3Styled>
                <PStyled name="Total control práctico tanto de la contabilidad como de las finanzas de cualquier empresa PYMES. Libros de Contabilidad, y todos los recursos financieros como para poder trabajar en un Banco o en cualquier gestoría como auxiliar administrativo"/>
            </div>
        </div>
    </div>
);

export default Education;