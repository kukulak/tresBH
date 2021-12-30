import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react/cjs/react.production.min';
// import './Proyectos.styles.scss';

// IMPORT MODULES




class ProyectosPartners extends Component {
    // constructor(props) {
    //     super(props);
  
    //   }

    state = {
        error: null,
        isLoaded: false,
        items: [], 
        x: 1
      };

    render(){
        return(
    <div className= {`proPartners gridPartner${this.props.cla}` }>

        <img src={this.props.partners} alt={this.props.alt} />
        

    </div>
    )
    }
}

export default ProyectosPartners;