import React from 'react';
import ReactDOM from 'react-dom';
import './ProyectosMobile.styles.scss';

// IMPORT MODULES


const ProyectosMobilePartners = (props) => (
    <div className="mobile__proPartners">

        <img src={props.partners} alt={props.alt} />
        

    </div>
)

export default ProyectosMobilePartners;