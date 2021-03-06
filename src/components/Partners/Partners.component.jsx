import React, { Component, useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
import './Partners.styles.scss';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import "swiper/components/effect-fade/effect-fade.min.css"
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';


import SwiperCore, { Autoplay, Navigation, Pagination, Scrollbar, A11y, EffectFade, EffectCoverflow } from 'swiper';

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import { ScrollTrigger } from "gsap/ScrollTrigger";

// IMPORT MODULES
// import ProyectosTitulo from './ProyectosTitulo.component';
// import ProyectosPicture from './ProyectosPicture.component';
// import ProyectosDescripcion from './ProyectosDescripcion.component';
// import BtnFlecha from '../globals/btnFlecha/btnFlecha.component';
import ProyectosPartners from './PartnersImages.component';
import TituloFlecha from '../globals/TituloFlecha/TituloFlecha.component'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
  } from "react-router-dom";

// Install modules
SwiperCore.use([Autoplay, Navigation, Pagination, Scrollbar, EffectCoverflow, EffectFade]);





gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

function textToHTML(str){
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, 'text/html');
    var valElement = doc.querySelectorAll('p');
    var pGroup = []
    for (let i = 0; i<valElement.length; i++){
        pGroup[i] = valElement[i].innerText
        // pGroup[i].write("<br>")
    }
    // console.log("EL GRUPO", pGroup)
    // return valElement.item(0).innerText
    return pGroup
  }


const numFour = (num) => {
    // num = 1
    if (num >=4){
        num = 0
        // num ++
    }
    else{
        num ++
    }
    return num
}

const getNumberFour = (len, index) => {
    let numberArray = [1, 3, 2, 4]
    let orderArray = []
    orderArray.length = len
    let flatArray = orderArray.fill(numberArray, 0, len/numberArray.length).flat()
    return flatArray[index]
}

function fotoProyecto(str) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, 'text/html');
    var divGallery = doc.getElementsByClassName('gallery');
    var pathElement = divGallery.item(0).querySelectorAll('img');
    // var pathNElement = pathElement.getElementsByClassName();
    var imageGroup = [];
    
    for (let i = 0; i < pathElement.length; i++) {
      
      imageGroup[i] = pathElement[i].attributes.src.value
      
    }
    // console.log("GRUPO DE IMAGENES", imageGroup)
    var imgPathsS = Object.entries(imageGroup);
  
  
    return imageGroup;
  
  
  }




function logosPartners(str) {
    // create an array of logos url and display de logos in a grid one yes and one no all the logos
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, 'text/html');
    var divGallery = doc.getElementsByClassName('gallery');
    var pathElement = divGallery.item(0).querySelectorAll('img');
    var imageGroup = [];
    
    for (let i = 0; i < pathElement.length; i++) {
      
      imageGroup[i] = pathElement[i].attributes.src.value
      
    }
    // console.log("GRUPO DE LOGOS?", imageGroup)
    var imgPathsS = Object.entries(imageGroup);
  
  
    return imageGroup;


}

function setLogos(){
    return fetch(`https://3bh.mx/api/wp-json/wp/v2/posts?categories=10&per_page=4`)
    // return fetch('https://3bh.mx/api/wp-json/wp/v2/posts?categories=14&page=1&per_page=1')
    .then(res => res.json())
   
}   
// const swiper = new Swiper(...);
    
function Partners(props) {

    
    let x = 0
    const pro = React.createRef();
    const [projects, setProjects] = useState([]);   
    const [ultraClass, setUltraClass] = useState([]);


    useEffect(()=>{
        x++
        let mounted = true;
        setLogos()
        .then(items => {
            if(mounted) {
                setProjects(items)
             }
         })
         return() => mounted = false;
     }, [x])


    return(
  
        <div className='gridPartnerLogos'>
            <TituloFlecha txt="Partners"/>
            <div className='partnerLogos'>
                    {/* {props.item.content.rendered} */}
                    {/* getNumberFour(logosPartners(item.content.rendered).length) */}
            { projects.map((item) => (
                logosPartners(item.content.rendered).map((intem, index) => (
                        <ProyectosPartners partners={ intem } alt={intem.slug} cla={getNumberFour(12, index)} />
                    )) 

                    )) }

                

            </div>
        </div>

      

        )

}

export default withRouter(Partners);