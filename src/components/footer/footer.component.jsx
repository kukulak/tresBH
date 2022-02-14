import React, { Component, useState, useEffect } from 'react';

import './footer.styles.scss';


// import Completo from '../../assets/iconos/logo.inline.svg'

import {ReactComponent as Completo} from '../../assets/iconos/logoCompleto.svg';
import {ReactComponent as Sobre} from '../../assets/iconos/sobre.svg';



import { gsap } from "gsap";



// IMPORT MODULES

import Redes from './../fixedMenu/redes.component';

import BtnFlecha from '../globals/btnFlecha/btnFlecha.component';

function textToHTML(str){
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, 'text/html');
    var valElement = doc.querySelectorAll('p');
    
    return valElement.item(0).innerText
    
}



function takeImages(str){
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, 'text/html');
    // var valElement = doc.querySelectorAll('p');
    var valElement = doc.getElementsByClassName('gallery');
    var takeImages = valElement.item(0).querySelectorAll('img');
    // var takeImages = valElement.item(0);
    var theImages = [];

    // var bigPicture = [].map.call(takeImages,function(node) {
    //     theImages.push( node.src ) 
    // })
    
    for (let i = 0; i < takeImages.length; i++) {
      
        theImages[i] = takeImages[i].attributes.src.value
        
      }
    


    console.log('TAKE BIG * IMAGES:', takeImages)
    
    // console.log("images")

    return theImages
    // return valElement.item(1).innerText

  }


  function takeInfo(){
   return fetch('https://3bh.mx/api/wp-json/wp/v2/posts?categories=19&per_page=1')
    .then(res => res.json())
    
  }
  


function Footer() {

    // const MyComponent = () => <Completo />;
    const pro = React.createRef();
    const [projects, setProjects] = useState([]);  



    useEffect(()=>{
        let mounted = true;
        takeInfo()
        .then(items => {
            if(mounted) {
                setProjects(items)
            }
        })
        return() => mounted = false;
    }, [])
        

    return(    
        <div className="footer">
             
    
            <div className="btnFooter">
                {/* <BtnFlecha txt="Servicios"/>
                <BtnFlecha txt="Nosotros"/>
                <BtnFlecha txt="Tienda"/>
                <BtnFlecha txt="Contacto"/>
                <BtnFlecha txt="Proyectos"/>
                <BtnFlecha txt="Galería"/>
                <BtnFlecha txt="Clientes"/> */}
            </div>

            <div className="logoFooter">
                <Completo />
            </div>
            
            <div className="contactoFooter">
                {/* <Sobre/> */}
                 <a href="mailto:contacto@3BH.com">contacto@3BH.mx
                 </a>
            </div>
            <div className="adress">
                <a href="https://www.google.com.mx/maps/place/Roma+8,+Ju%C3%A1rez,+Cuauht%C3%A9moc,+06600+Ju%C3%A1rez,+CDMX/@19.4289345,-99.1559173,20z/data=!4m13!1m7!3m6!1s0x85d1ff2d84b47dc9:0x642fff36dd25db19!2zUm9tYSA4LCBKdcOhcmV6LCBDdWF1aHTDqW1vYywgMDY2MDAgSnXDoXJleiwgQ0RNWA!3b1!8m2!3d19.4288846!4d-99.1560049!3m4!1s0x85d1ff2d84b47dc9:0x642fff36dd25db19!8m2!3d19.4288846!4d-99.1560049" target="_blank" rel="noopener noreferrer">
                    <p>Roma 8, Colonia Juarez</p> 
                    {/* <p>Benito Juárez C.P. 03020</p>  */}
                    <p>CDMX, México.</p>
                </a>
            </div>

            <div className="infoFooter">
                <div className="redesFooter">
                    <Redes />
                </div>
                <div className="legalesFooter">
                    <p>3BLUEHOUSE 2021&reg;</p>
                    {/* <p> • </p>  */}
                    {/* <a>AVISO LEGAL</a> <p> • </p>
                    <a>POL&Iacute;TICAS DE PRIVACIDAD</a>         */}
                </div>      
            
            </div>
                
            </div>
    
    )

        // return(

        //     <div className="DescansoDos">
        //         {frase}
        //     </div>
        // )
    }



export default Footer;