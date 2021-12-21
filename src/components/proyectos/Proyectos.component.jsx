import React, { Component, useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
// import './homepage.styles.scss';

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
import ProyectosTitulo from './ProyectosTitulo.component';
import ProyectosPicture from './ProyectosPicture.component';
import ProyectosDescripcion from './ProyectosDescripcion.component';
import ProyectosPartners from './ProyectosPartners.component';
import BtnFlecha from '../globals/btnFlecha/btnFlecha.component';
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
    console.log("EL GRUPO", pGroup)
    // return valElement.item(0).innerText
    return pGroup
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
    console.log("GRUPO DE IMAGENES", imageGroup)
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

function Proyectos(props) {

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
  
        <div className={ `projects cp${doUltraClass(props.index)}` }>
        {/* <div className='projects'> */}

            <div className="proImages">
               

                    {/* {fotoProyecto(props.images.content.rendered).map((images) =>(
                      
                            <ProyectosPicture img={ images } />
                       
                    ))} */}

                <Swiper
                effect={"fade"}
                // dir="rtl"
                // slidesPerView={1}
                centeredSlides={true}
                // spaceBetween={30}
                // freeMode={true}
                // grabCursor={true}
                autoplay={{ "delay": 3500, "disableOnInteraction": false }}
                // navigation={true}
                // navigation   
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                className="mySwiper2">

                    {fotoProyecto(props.images.content.rendered).map((images) =>(
                        <SwiperSlide>
                            <ProyectosPicture img={ images } />
                        </SwiperSlide>
                    ))}

                </Swiper>

              

            </div>
                
            {/* <ProyectosPicture img={ props.img } /> */}

            <div className='proInfo'>
                {/* <p>{item.id}</p> */}
                <ProyectosTitulo titulo={ props.titulo } />
                <ProyectosDescripcion descripcion={ props.descripcion }  />

                <div className="parrafos">
                    
                    {textToHTML(props.parrafo.content.rendered).map((parrafo)=>(
                        <ProyectosDescripcion descripcion={ parrafo }  />
                    ))}

                </div>

                    <h2 className="txtTech">
                        <span className="gato">#</span>knowhow es saber que tecnología usar
                    </h2>
                <div className="groupPartner">
                    
                    { fotosParners(props.item.content.rendered).map((item) => (
                        <ProyectosPartners partners={ item } alt={item.slug}/>
                    )) }

                </div>

                <BtnFlecha
                // onClick={() => history.push(`${match.url}${item.id}`)}
                goTo={ props.goTo }
                txt={ props.txt } />
            </div>
        </div>

      

        )

}

export default withRouter(Proyectos);