import React, { Component, useState, useEffect } from 'react';

import './descansoUno.styles.scss';

import { gsap } from "gsap";



// IMPORT MODULES
import ImgDescanso from './descansoImages.component'



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
  


function DescansoDos() {

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
        <div className="descansoDos">
             
            {projects.map(item =>
                <div className="no-highlight fraseContainerDos">
                      
                        <div className="no-highlight fraseDescanso2">
                            { textToHTML(item.content.rendered) }     
                        </div>

                </div>
            )}

            

                
            </div>
    
    )

        // return(

        //     <div className="DescansoDos">
        //         {frase}
        //     </div>
        // )
    }



export default DescansoDos;