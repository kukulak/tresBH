import React from 'react';
import './home.styles.scss';
import FixedMenu from '../../fixedMenu/fixedMenu.component';
import HeroBanner from '../../heroBanner/heroBanner.component';
// IMPORT MODULES




const HomePage = () => (
    <div className="homepage">
        {/* <TheCursor/> */}
        <div className="menu"> 
        <FixedMenu/>
        </div>

     
        <HeroBanner />
        {/* <Proyectos /> */}
        {/* <DescansoUno /> */}
        {/* <Video category='18' video='second' muter='mSecond' btn='btnSecond'/> */}
        {/* <HomeInstagram /> */}
        {/* <DescansoDos/> */}
        {/* <HomePartners /> */}
        {/* <HomeFooter />  */}
        {/* <AnimatedBackground /> */}
{/* 
        */}

    </div>
)

export default HomePage;