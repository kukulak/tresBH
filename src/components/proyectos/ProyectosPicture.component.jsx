import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Proyectos.styles.scss';
import { gsap } from "gsap";

// IMPORT MODULES

function ProyectosPicture(props) {
    const pic = React.createRef();

    useEffect(() => {
        gsap.to(pic.current, {
            scrollTrigger:{
                trigger: ".proPic",
                start: "top center",
                // end: "center center",
                markers: false,
                toggleActions: "play pause resume reset"

            },
            x: -10,
            // rotation: 360,
            ease: 'none',
            duration: 2
        })
    }, [pic]);

    return(

        <div ref={pic} className="proPic">
        
            <img src={props.img} alt={props.alt} />

        </div>
        )

}

export default ProyectosPicture;