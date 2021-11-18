import React, { Component, useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
// import './homepage.styles.scss';
import './homeInstagram.styles.scss';

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import { ScrollTrigger } from "gsap/ScrollTrigger";

// // IMPORT MODULES
// import ProTitulo from './projectsTitulo.component';
// import ProPic from './projectsPicture.component';
// import ProDescripcion from './projectsDescripcion.component';
// import ProPartners from './projectsParners.component';
// import BtnFlecha from './btnFlecha.component';
import TituloFlecha from '../globals/TituloFlecha/TituloFlecha.component';


import TimeInsta from './insta.component'




const token = "IGQVJWTzhxb1BQLUd1aHhNdGNicmFzSWhuWS1LSnpkUGQyLTdXWHZA5RVV4WVFjZAWlIb3dUenlxc21RWUVNV21PZAGxaZAlJBVTNtTm1ZAemNOQ21aOWdESHFOUXJKZAHhqU08xX1IwNGZACOWUtZADlhVkxSSQZDZD"
// "IGQVJXemlRcDEyMG1OQWt6SVZAVaTFkNGk2MFl1alFlWUh5T1BBZAHFTRGdXMm1yQkNrb1ZA2OE9uWTMwME1JQjlnaTh2MzJzeGNHa19LQ1JRV2FsY2ZApbUI3NnFEVV9GWW05dnJVNnJSbTFxdlNxSGJFegZDZD"

const uId = 17841402888592043




class HomeInstagram extends Component {

    state = {
        error: null,
        isLoaded: false,
        items: []
      };

      
      componentDidMount() {
        fetch(`https://graph.instagram.com/me/media?fields=id,username,media_url&access_token=${token}`)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.data
              });
            },
            // Nota: es importante manejar errores aquí y no en 
            // un bloque catch() para que no interceptemos errores
            // de errores reales en los componentes.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          ).then( console.log('to load or not to load', this.state) )
      }

  
     
    render(){
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div className="carga">Cargando 3BH...</div>;
        } else {
            return(

                <div className="spaceInstagram">
                     <TituloFlecha txt="@3BH"/>
                    <div className="sectionInstagram"> 
                    <div className='timeInstagram'> 
                        { items.map( item => (

                            <TimeInsta
                                num={item.id[15]}
                                key={item.id}
                                id={item.id}
                                media_url={item.media_url}
                            />
                                
                        )) }


something here
                    </div>
                    </div>
          
                </div>
    
            );   
        }            
    }

}

export default HomeInstagram;