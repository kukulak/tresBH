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
// import Proyectos from './Proyectos.component'
import Proyectos from '../../components/pages/Proyecto/ProyectoDetail.component'

import { useParams } from "react-router-dom";
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
    var pGroup = []
    for (let i = 0; i<valElement.length; i++){
        pGroup[i] = valElement[i].innerText
        // pGroup[i].write("<br>")
    }
    console.log(pGroup)
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

function setVideo(proyectoId){
    return fetch(`https://3bh.mx/api/wp-json/wp/v2/posts/${proyectoId}`)
    // return fetch(`https://3bh.mx/api/wp-json/wp/v2/posts/${proyectoId}`)

    // return fetch(`https://3bh.mx/api/wp-json/wp/v2/posts?categories=16&per_page=4`)
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

function ProyectosDetail(props) {

    const pro = React.createRef();
    const [projectState, setProjectState] = useState(null);   
    const [ultraClass, setUltraClass] = useState([]);
    const params = useParams()

    useEffect(()=>{
        let mounted = true;
        console.log("MATCH", props.match.url)
        setVideo(params.itemId)
        .then(items => {
            if(mounted) {
                setProjectState(items)
             }
         })
        console.log("project", projectState)

         return() => mounted = false;
     }, [props.match.url])






    return(
  
                <div className= 'projectsDetail'>




            {/* {projects.map((item, index) =>    */}
           
                   {projectState && 

                    <Proyectos 
                        index={projectState.id}
                        images={projectState}
                        // img={fotoProyecto(projectState.content.rendered)[0]}

                        titulo={projectState.title.rendered}
                        // descripcion={textToHTML(projectState.content.rendered)}
                        parrafo={projectState}

                        item={projectState}
                        goTo={projectState.id}
                        txt='ver proyecto'
                    />

                    } 
                                         
            
                
           
            {/* )} */}



                {/* <div className='projects'> */}
                        
                                      
                </div>

      

        )

}

export default withRouter(ProyectosDetail);