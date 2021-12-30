import React from 'react';

import './insta.styles.scss';

const eliminateThat = ( thing )=>{
    if(thing === null ){
        
    }
}


const TimeInstagram = ( { id, media_url, num } ) => {
  
   
    return(
        
        //    instaImage
        <div className={`grid${num}`}><img className={`instaImage grid${num}`} src={media_url} alt={`insta${id}`} /></div>
        
    )
};




export default TimeInstagram;



// long live token

