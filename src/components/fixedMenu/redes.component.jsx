import React from 'react'
import './fixedMenu.styles.scss'
import insta from '../../assets/iconos/iconInsta.svg';

import face from '../../assets/iconos/iconFacebook.svg';

// IMPORT MODULES


const Redes = () => (

    <div className='redes'>
        <a href="https://www.facebook.com/3BHMX"  target="_blank" rel="noreferrer" className="face redesSize" >
            <img src={face} alt="faceBook" />
        </a>
        <a href="https://www.instagram.com/3bhmex/" target="_blank" rel="noreferrer" className="insta redesSize">
            <img src={insta}  alt="instagram" />
        </a>

    </div>

)


export default Redes