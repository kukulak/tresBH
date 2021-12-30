import React from 'react';
import './Proyecto.styles.scss';
import FixedMenu from '../../fixedMenu/fixedMenu.component';
import HeroBanner from '../../heroBanner/heroBanner.component';
import ProyectosDetail from '../../proyectos/ProyectosDetail.component';
// IMPORT MODULES
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";

import Footer from '../../footer/footer.component';

import Proyectos from '../../proyectos/ProyectosAll.component';
import ProyectosMobile from '../../ProyectosMobile/ProyectosMobile.component';

const PaginaProyectopDetail = () => (
    <div className="homepage">
        {/* <TheCursor/> */}
        <div className="menu"> 
        <FixedMenu/>
        </div>

     
    
        <ProyectosDetail />
 
        {/* <DescansoUno /> */}
        {/* <Video category='18' video='second' muter='mSecond' btn='btnSecond'/> */}
        {/* <HomeInstagram /> */}
        {/* <DescansoDos/> */}
        {/* <HomePartners /> */}
        {/* <HomeFooter />  */}
        {/* <AnimatedBackground /> */}
{/* 
        */}

        <Footer/>
        

    </div>
)

export default PaginaProyectopDetail;