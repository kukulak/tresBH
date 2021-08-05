import React from 'react';
import ReactDOM from 'react-dom';
import './ProyectosMobile.styles.scss';

// IMPORT MODULES


const ProyectosMobileDescripcion = (props) => (
    <div className="mobile__proDescripcion">
        
        {props.descripcion}

    </div>
)

export default ProyectosMobileDescripcion;