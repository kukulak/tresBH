import React from 'react';
import ReactDOM from 'react-dom';
import './Proyectos.styles.scss';

// IMPORT MODULES


const ProyectosDescripcion = (props) => (
    <div className="proDescripcion">
        
        {props.descripcion}

    </div>
)

export default ProyectosDescripcion;