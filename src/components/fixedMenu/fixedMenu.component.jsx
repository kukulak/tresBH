import React from 'react';
import ReactDOM from 'react-dom';
import './fixedMenu.styles.scss';


// IMPORT MODULES

// import Idiomas from './idiomas.component'
import Menu from './menu.component'
import Redes from './redes.component'
// import Mute from './mute.component'

const FixedMenu = () => (
    <div className='fixedMenu'>

        <Menu/>
        {/* <Idiomas /> */}
        {/* <Mute/> */}
        <Redes/>
        
    </div>

)

export default FixedMenu