import React from 'react';
import ReactDOM from 'react-dom';
import './ProyectosMobile.styles.scss';

// IMPORT MODULES


const ProyectosMobileTitulo= (props) => (

    <h1 className="mobile__proTitulo">

        {props.titulo}

    </h1>
    
)

export default ProyectosMobileTitulo;