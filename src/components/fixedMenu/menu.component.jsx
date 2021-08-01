import React, { Component, useState, useEffect, useContext } from 'react';
import './fixedMenu.styles.scss'

// IMPORT MODULES
import Logo from './logo.component';



import { gsap } from "gsap";

// var tl;

function animateHam(showMenu){
    // var toggle = false;
    // gsap.set(showMenu, {xPercent: 10, yPercent: 10})
    var tl = gsap.timeline({paused:true, reversed: true})
                    .from(
                            showMenu,
                        {
                            background: '#333333',
                            // color: '#450000',
                            xPercent: 15,
                            yPercent: 15,
                            x: '-10',
                            y: '-12',
                            duration: 0.1,
                            // position: 'absolute',
                            opacity: 1  
                            // ease: "slow(0.7 0.7, 0.7 0.7, false)"
                        }
                    )
                    .from( showMenu,{
                        background: '#ff0000',
                        xPercent: 10,
                        yPercent: 10,
                        x:'-20',
                        y: '1',
                        duration: 0.1
                    })
    // tl.pause()
    // toggle = !toggle;
    
}



// onClick ={() => takeMyName( animateHam(myName) )}

// var tl


function Menu(){
    const [myName, takeMyName] = useState([]);
    const [anim, takeAnim] = useState(false);
    
    const toogleMenu = () => {
        // animateHam(showMenu)
        console.log('pressed or not')
        takeAnim(!anim);
    }

    // const HAM = useRef();
    
    useEffect(()=>{
        let mounted = true;
        if(mounted){
            takeMyName(document.getElementById('idHamCircle'))
        }
        
        return() => mounted = false;
        
    });
    
    useEffect(()=>{
        let mounted = true;
        gsap.set(myName, {x:-5, y:-0})
        var tl = gsap.timeline({paused:true, reversed: true})
            .from( myName, {
                    x: 175,
                    y: 0, 
                    duration: 1,
                    opacity: 1
                    // ease:'elastic'
                })

        // if(mounted){
        //     takeAnim(
        //         function tooglePAstMenu(){
                    
        //             // animateHam(showMenu)
        //             tl.reversed() ? tl.play() : tl.reverse();
        //         }
                
        //     )
        // }
        return() => mounted = false;

    })


    return(

        
    <div className='logoHam'>
    
        <Logo/>

    
    </div>
    
    )
}



export default Menu