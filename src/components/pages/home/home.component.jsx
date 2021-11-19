import React from 'react';
import './home.styles.scss';
import FixedMenu from '../../fixedMenu/fixedMenu.component';
import HeroBanner from '../../heroBanner/heroBanner.component';
// IMPORT MODULES
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";

import Footer from '../../footer/footer.component';
import HomeInstagram from '../../HomeInstagram/homeInstagrams.component'
import ProyectosAll from '../../proyectos/ProyectosAll.component';
import ProyectosMobile from '../../ProyectosMobile/ProyectosMobile.component';

const HomePage = () => (
    <div className="homepage">
        {/* <TheCursor/> */}
        <div className="menu"> 
        <FixedMenu/>
        </div>

     
        <HeroBanner />
        <BrowserView>
            <ProyectosAll />
        </BrowserView>
        <MobileView>
             <ProyectosMobile />
        </MobileView>

        {/* <DescansoUno /> */}
        {/* <Video category='18' video='second' muter='mSecond' btn='btnSecond'/> */}
        <HomeInstagram />
        {/* <DescansoDos/> */}
        {/* <HomePartners /> */}
        {/* <HomeFooter />  */}
        {/* <AnimatedBackground /> */}
{/* 
        */}

        <Footer/>
        

    </div>
)

export default HomePage;