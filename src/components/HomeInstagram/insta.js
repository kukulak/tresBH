//   {"access_token": "IGQVJXUEYyajlIV0ZAQdlJNS3gtVFhNb3MybTAwUjlPRUZAhZAUV4VzFMcW9IdkZAEcDVNTkFMSkU3TjdQUzJZAQVE3bmpCOGhBWWlxTV84VW1CcWo5TEtSbVd2ZAThGN04xTHQ4SlBabzJ6WmFmeGxTejcySEVyY2YtRVpnbjJr", "user_id": 17841402888592043}
import React, { Component } from 'react';

import './home.styles.scss';





class Insta extends Component{
    state = {
        contacts: []
    }

    componentDidMount(){
        fetch('url')
        .then(res => res.json())
        .then(( data ) => {
            this.setState({ contacts: data })
        })
        .catch(console.log)
    }
}


export default Insta;