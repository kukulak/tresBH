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




const token = "IGQVJXSlZA1RnBzM2cxRlhLMXphX1BSclpuY3Y2QnNLeWZAJa0QwbDNFN3BLSXotZAGxsX1RfWERtUDFHZAHc4N0pLUVNfSGdWODNSQ21SZAlY5eTAyemNXZA0laVFFXSHRYcmo0bUFMT2ppRG5oWk9CWDRCSwZDZD"

// CToken
// "IGQVJXUWZATdm53RjRweDVCVElWaGtqZAGNuSS1seFRQN0JKcVZAfUFdCYUk5ckdkRHpIT0t5SWhqdElnRmZA6UExsM3kxOVB5OEZAhdndreERfWlA5aGFMUnpONFNFNlBKZA0lTamdmMmZAFZA2FUZAHgwRmlUSQZDZD"

// tres Token
// IGQVJXSlZA1RnBzM2cxRlhLMXphX1BSclpuY3Y2QnNLeWZAJa0QwbDNFN3BLSXotZAGxsX1RfWERtUDFHZAHc4N0pLUVNfSGdWODNSQ21SZAlY5eTAyemNXZA0laVFFXSHRYcmo0bUFMT2ppRG5oWk9CWDRCSwZDZD

// danToken
// IGQVJVZA294cUxaM0xlLUJEY2VBd3lKSWluZAFRsUUR2RWVsOGRhdFB4dm9pYkdObkZAtblZAxUlBhQ0tFMU5tUmRfNnZASMUp0THRjYjQxbS0zcnRlVDBvSEV4UUtEWUk4ZAnIxX3R3Y0NGQkVoblRwb0UzYwZDZD


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
                    </div>
                    </div>
          
                </div>
    
            );   
        }            
    }

}

export default HomeInstagram;