import React, { useEffect } from 'react';
// import './projects.styles.scss';
import { gsap } from "gsap";

// IMPORT MODULES


function ImgDescanso(props){
    
    const pro = React.createRef();    


    useEffect(() => {
        
        
              
        gsap.from(pro.current, {
            scrollTrigger: {
              trigger: pro.current,
              start: "top+100 90%",
              end: "100px center",
              pin: false,
              scrub: 2,
              markers: false,
              toggleActions: "play pause resume reset"
            },
            y: "120px",
            ease: "none",
            duration: 1.5,
            alpha: 1
          });
          
        }
        
        )

return(

    <img ref={ pro } className="imgDescanso" src={props.imagen} alt={props.alt} />

    )    
    
}


export default ImgDescanso;