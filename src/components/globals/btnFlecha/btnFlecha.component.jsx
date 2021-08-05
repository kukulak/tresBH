import React from 'react';
import ReactDOM from 'react-dom';
import './btnFlecha.styles.scss';
// import flecha from '../../assets/iconos/flecha.svg'

// import {ReactComponent as Flecha} from '../../assets/iconos/flecha.svg';

// IMPORT MODULES


const BtnFlecha = (props) => (

    <a href={props.goTo} className="btnFlecha">
        {props.txt}

        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 75 75" style={{clipRule:'evenodd',fillRule:'evenodd',strokeLinecap:'round',strokeLinejoin:'round',strokeMiterlimit:11,version:1.1}}>

            <path d="M25 69l45 0 0-45" style={{fill:'none',strokeWidth:8.33+'px',stroke:'#009def'}}/>
            <path d="M68 67l-61-61" style={{fill:'none',strokeWidth:8.33+'px',stroke:'#009def'}}/>

        </svg>

    </a>
)

export default BtnFlecha;