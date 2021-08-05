import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './ProyectosMobile.styles.scss';
import { gsap } from "gsap";

// IMPORT MODULES

function ProyectosMobilePicture(props) {
    const pic = React.createRef();

    useEffect(() => {
        gsap.fromTo(pic.current, 
                {
                y: -10
                
            },
            {
            
            scrollTrigger:{
                trigger: pic.current,
                start: "top center",
                // end: "center center",
                markers: true,
                scrub: 1,
                toggleActions: "play pause resume reset"

            },
            y: 0,
            // rotation: 360,
            ease: 'none',
            // duration: 2
        })
    }, [pic]);

    return(

        <div ref={pic} className="mobile__proPic">
        
            <img src={props.img} alt={props.alt} />

        </div>
        )

}

export default ProyectosMobilePicture;