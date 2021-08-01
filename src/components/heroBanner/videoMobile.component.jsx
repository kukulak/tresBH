import React, { useState, useEffect, useCallback, useRef } from 'react';
// import ReactDOM from 'react-dom';
import audifonos from '../../assets/iconos/audifonos.svg';
import './heroBanner.styles.scss';


import ReactPlayer from 'react-player'

import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";
// IMPORTS



function stringToHTML(str) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, 'text/html');
    var divVideo = doc.getElementsByClassName('wp-video');
    var pathElement = divVideo.item(0).innerText;
   
    console.log("elpathdel MOVIE", pathElement)
    return pathElement;

}

function stringToPoster(imgP) {
    let parser = new DOMParser();
    let doc = parser.parseFromString(imgP, 'text/html');
    let poster = doc.getElementsByClassName('wp-video')
    let pathPoster = poster.item(0).childNodes[2].attributes[4].nodeValue;
   
    console.log("elpathdel POSTER", pathPoster)
    // console.log(poster)
    return pathPoster;

}




// async function Mute(vcr){
//     vcr.muted = !vcr.muted
// }

// async function HideMuter(hm){
//     console.log('this is HM', hm)
//     hm.style.display = 'block'
// }


// async function HideBtn(hb){
//     hb.style.display = 'none'
// }


// function activateLasers(ct){
//     console.log('this is CONT', ct)
//     ct.style.opacity = 0;
// }

// function alphaLasers(c){
//     c.style.opacity = 0;
// }

// function useVideoReference(){
//     const list = useRef(null);
//     const video = useRef(null);
//     const muter = useRef(null);
//     const btn = useRef(null);

//     const setRef = useCallback( node =>{
//         if(ReferenceError.current){

//         }

//         if(node){

//         }

//         list.current = node
//     }, [])

//     return[setRef]
// }

function Video(props){
   
    // const [list, setList] = useState([]);
    const [videoState, setVideoState] = useState(null)
    let [muteState, setMuteState] = useState(true)
    // const [muter, takeMuter] = useState([]);
    // const [btn, takeBtn] = useState([]);

    // const list = useRef(null);
    const video = useRef(null);
    const muter = useRef(null);
    const btn = useRef(null);

    // const [cont, contentMuter] = useState([]);
    
    // const [list] = useVideoReference();


    async function ctrVideo(vid){
        var i = 0;
        var sounds = document.querySelectorAll('video');
    
        for(i=0; i<sounds.length; i++) {
            sounds[i].muted = true;
        }
        
        vid.current.volume = 0.5
        vid.current.muted = !vid.current.muted
        if( vid.current.paused ){
            vid.current.play()
        } 
    
        console.log("waterfunken")
    
    }
    


    async function Mute(vcr){
        vcr.current.muted = !vcr.current.muted
        // vcr.current.muted = false
    }
    
    async function HideMuter(hm){
        console.log('this is HM', hm)
        hm.current.style.display = 'block'
    }
    
    
    async function HideBtn(hb){
        hb.current.style.display = 'none'
    }
    
    

    

    // useEffect(()=>{
    //     let mounted = true;
    //     fetch(`https://3bh.mx/api/wp-json/wp/v2/posts?categories=${props.category}&page=1&per_page=1`)
    //     // return fetch('https://3bh.mx/api/wp-json/wp/v2/posts?categories=14&page=1&per_page=1')
    //     .then(res => res.json())
    //     .then(items => {
    //         if(mounted) {
    //             setList(items)
    //             // takeVideo(document.getElementById(`${props.video}`))
    //             // takeMuter(document.getElementById(`${props.muter}`))
    //             // takeBtn(document.getElementById(`${props.btn}`))
    //             // contentMuter(document.getElementById(`${props.cont}`))
    //          }
    //      })
    //      console.log("CHOPRA LIST", list)
    //      return() => mounted = false;
    //  })


    //  mediaSOURCE for VIDEO



    useEffect(() => {
        const apiUrl = `https://3bh.mx/api/wp-json/wp/v2/posts?categories=${props.category}&page=1&per_page=1`;
        fetch(apiUrl)
        .then(res => res.json())
        .then(items => setVideoState( items ))
        console.log("THIS IS THE LIST", videoState)
    }, [props.category]);

    // useEffect(() => {

        function handleToggleMuted(){
            setMuteState( muteState = !muteState )
          }

    // })
    
    
    return(


        <div className="video3bh">

          

            
            {/* https://3bh.mx/api/wp-content/uploads/2021/04/videofinal-web1080DiscordNitro.mp4 */}
          
        
{/* 
                 <video  id={ props.video } autoPlay muted loop src="https://3bh.mx/api/wp-content/uploads/2021/04/videofinal-web1080DiscordNitro.mp4"></video> */}


            <BrowserView>
            <div className="btnContenedor">
                
                <button ref={btn} id={ props.btn } onClick={()=> {
                    HideMuter(muter);
                    ctrVideo(video);
                    HideBtn(btn)
                    }} className="audifonos">
                    <img src={audifonos}  alt="activar" />
                    <p>Activar Sonido</p>


                </button>


                <button ref={muter} id={ props.muter } onClick={() => {
                    Mute(video);
                    HideMuter(btn);
                    HideBtn(muter);
                    }} className="muter">
                    <img src={audifonos}  alt="Mute" />
                    <p>Mute Sound</p>
                </button>


            </div>

            {/* poster={ stringToPoster(videoState.items.content.rendered) }  */}
            {/* {videoState.items.map((item) =>  */}

           {videoState && videoState.map((vid) => <video ref={video} playsInline autoPlay muted loop controls src={ stringToHTML(vid.content.rendered) }></video>)}


           {/* {videoState && videoState.map((vid) => <ReactPlayer ref={video} playing={true} url={ stringToHTML(vid.content.rendered) } />)}
 */}



            {/* )}  */}
      
{/*         

             {list.map((item, index) => 
           
                <video ref={video} key={index} autoPlay muted loop controls poster={ stringToPoster(item.content.rendered) } src={ stringToHTML(item.content.rendered) }></video>
            
                 
            )}    */}

            </BrowserView>

            <MobileView>
            <div className="btnContenedor">
                
                <button ref={btn} id={ props.btn } onClick={()=> {
                    // HideMuter(muter);
                    ctrVideo(video);
                    // handleToggleMuted();
                    // HideBtn(btn);
                    }} className="audifonos">
                    <img src={audifonos}  alt="activar" />
                    <p>Activar Sonido</p>


                </button>


                <button ref={muter} id={ props.muter } onClick={() => {
                    Mute(video);
                    HideMuter(btn);
                    HideBtn(muter);
                    handleToggleMuted();
                    ctrVideo(video);
                    }} className="muter">
                    <img src={audifonos}  alt="Mute" />
                    <p>Mute Sound</p>
                </button>


            </div>
                {/* <video ref={video} autoplay muted loop>
                    <source src='https://3bh.mx/api/wp-content/uploads/2021/07/videofinal-web1080DiscordNitroSmall.mp4' />
                </video> */}

                <ReactPlayer width='100%' height="100vh"  loop={true} className="videoMobile" ref={video} muted={muteState} playing={true} url="https://3bh.mx/api/wp-content/uploads/2021/07/videofinal-web1080DiscordNitroSmall.mp4" />

            </MobileView>



             
    


        </div>
    )


}

export default Video;