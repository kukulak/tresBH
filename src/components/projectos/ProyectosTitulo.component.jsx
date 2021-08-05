import React from 'react';
import ReactDOM from 'react-dom';
import './Proyectos.styles.scss';

// IMPORT MODULES


const ProyectosTitulo= (props) => (

    <h1 className="proTitulo">

        {props.titulo}

    </h1>
    
)

export default ProyectosTitulo;