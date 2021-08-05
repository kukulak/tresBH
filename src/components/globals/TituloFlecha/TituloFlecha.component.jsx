import React from 'react';

import './TituloFlecha.styles.scss';
import flecha from  '../../../assets/iconos/flecha.svg'

// IMPORT MODULES


const TituloFlecha = (props) => (
    <div className='titulo'>
        <h1>
            {props.txt}
            <a href={props.goTo} className="tituloFlecha">
                <img src={flecha} alt="flecha" />
            </a>
        </h1>
    </div>
)

export default TituloFlecha;