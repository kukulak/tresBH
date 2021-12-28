import React, { Component, useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
// import './homepage.styles.scss';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';


import SwiperCore, { Autoplay, Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper';

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import { ScrollTrigger } from "gsap/ScrollTrigger";

// IMPORT MODULES
import ProyectosTitulo from './ProyectosTitulo.component';
import ProyectosPicture from './ProyectosPicture.component';
import ProyectosDescripcion from './ProyectosDescripcion.component';
import ProyectosPartners from './ProyectosPartners.component';
import BtnFlecha from '../globals/btnFlecha/btnFlecha.component';
import TituloFlecha from '../globals/TituloFlecha/TituloFlecha.component'
import Proyectos from './Proyectos.component'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
  } from "react-router-dom";

// Install modules
SwiperCore.use([Autoplay, Navigation, Pagination, Scrollbar, EffectCoverflow]);





gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

function textToHTML(str){
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, 'text/html');
    var valElement = doc.querySelectorAll('p');
  
    return valElement.item(0).innerText
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
  
    var imgPathsS = Object.entries(imageGroup);
  
  
      
    
  
  
  
    return imageGroup;
  
  
  }

function fotosParners(str) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, 'text/html');
    var divGallery = doc.getElementsByClassName('gallery');
    var pathElement = divGallery.item(1).querySelectorAll('img');
    // var pathNElement = pathElement.getElementsByClassName();
    var imageGroup = [];
  
    for (let i = 0; i < pathElement.length; i++) {
      
      imageGroup[i] = pathElement[i].attributes.src.value
      
    }
  
    var imgPathsS = Object.entries(imageGroup);
  
    return imageGroup;
  
  
  }

function setVideo(){
    return fetch(`https://3bh.mx/api/wp-json/wp/v2/posts?categories=16&per_page=4`)
    // return fetch('https://3bh.mx/api/wp-json/wp/v2/posts?categories=14&page=1&per_page=1')
    .then(res => res.json())
   
}  

function doUltraClass(number){
    if (number % 2){
        number = 1
    }else{
        number = 2
    }
    return number;
}
  
// const swiper = new Swiper(...);

function ProyectosAll(match, history) {

    const pro = React.createRef();
    const [projects, setProjects] = useState([]);   
    const [ultraClass, setUltraClass] = useState([]);


    useEffect(()=>{
        let mounted = true;
        setVideo()
        .then(items => {
            if(mounted) {
                setProjects(items)
             }
         })
         return() => mounted = false;
     }, [])

    

    return(
        <div className="spaceProjects">

            <TituloFlecha txt="Proyectos"/>

            <div ref={pro} className='contenedorProjects'>


            {/* <Swiper
            // effect="coverflow"
            dir="rtl"
            slidesPerView={'auto'}
            centeredSlides={true}
            spaceBetween={30}
            freeMode={true}
            // grabCursor={true}
            autoplay={{ "delay": 2500,
            "disableOnInteraction": true }}
            // navigation
            // pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            breakpoints={{
                "640": {
                //   "slidesPerView": 2,
                    "spaceBetween": 20
                },
                "768": {
                //   "slidesPerView": 4,
                    "spaceBetween": 40
                },
                "1024": {
                //   "slidesPerView": 5,
                    "spaceBetween": 50
                }
                }}
            className="mySwiper"> */}

            {projects.map((item, index) =>   
            // <SwiperSlide>
                                          
                    <Proyectos
                        index={index}
                        img={fotoProyecto(item.content.rendered)[0]}
                        images={item}
                        titulo={item.title.rendered}
                        descripcion={textToHTML(item.excerpt.rendered)}
                        parrafo={item}
                        item={item}
                        goTo={item.id}
                        txt='ver proyecto'


                    />
                
            // </SwiperSlide>
            )}


            {/* </Swiper> */}
            
      
            </div>

            {/* <div className="centrarBtn">
                <BtnFlecha goTo='/proyectos' txt='Conoce todos los proyectos' />
            </div> */}

        </div>
    

        )

}

export default withRouter(ProyectosAll);