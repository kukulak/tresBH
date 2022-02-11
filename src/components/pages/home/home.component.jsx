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
import Partners from '../../Partners/Partners.component'
                //  components/Partners/Partners.component.jsx
import DescansoUno from './descansoUno.component'
import DescansoDos from './descansoDos.component'


const HomePage = () => (
    <div className="homepage">
        {/* <TheCursor/> */}
        <div className="menu"> 
        <FixedMenu/>
        </div>

     
        <HeroBanner />
        <DescansoUno />
        
        <BrowserView>
            <ProyectosAll />
        </BrowserView>
        <MobileView>
             <ProyectosMobile />
        </MobileView>

        {/* <Video category='18' video='second' muter='mSecond' btn='btnSecond'/> */}
        
        <HomeInstagram />
        <DescansoDos/>
        <Partners />
        {/* <HomeFooter />  */}
        {/* <AnimatedBackground /> */}
{/* 
        */}

        <Footer/>
        

    </div>
)

export default HomePage;