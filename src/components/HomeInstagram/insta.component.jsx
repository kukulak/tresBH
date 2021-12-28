import React from 'react';

import './insta.styles.scss';


const TimeInstagram = ( { id, media_url, num } ) => {
    let instaImage
    if(media_url.indexOf('video') === -1){
        instaImage = <img className={`instaImage grid${num}`} src={media_url} alt={`insta${id}`} />
    } else {
        instaImage = null
        // instaImage = <div className='social3bh'>@3bhmex</div>

    }
   
    return(
        <div className={`grid${num}`}>
           {instaImage}
            {/* <img className={`instaImage grid${num}`} src={media_url} alt={`insta${id}`}/> */}
            {/* <img className="instaImage" src={media_url} alt="insta"/>  */}
        </div>
    )
};




export default TimeInstagram;



// long live token

