import React from 'react';

import Insta from './insta.js'
import './home.styles.scss';


const TimeInstagram = ( { id, media_url, num } ) => {
    return(
        <div className={`grid${num}`}>
            <img className={`instaImage grid${num}`} src={media_url} alt={`insta${id}`}/>
            {/* <img className="instaImage" src={media_url} alt="insta"/>  */}
        </div>
    )
};




export default TimeInstagram;



// long live token

