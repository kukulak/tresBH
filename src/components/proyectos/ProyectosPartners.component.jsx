import React from 'react';
import ReactDOM from 'react-dom';
import './Proyectos.styles.scss';

// IMPORT MODULES


const ProyectosPartners = (props) => (
    <div className="proPartners">

        <img src={props.partners} alt={props.alt} />
        

    </div>
)

export default ProyectosPartners;