import React from 'react'
import './fixedMenu.styles.scss'
import logo from '../../assets/iconos/LO_3bh-SMALL.svg';
import { Route, Link, BrowserRouter, withRouter } from "react-router-dom";

// IMPORT MODULES

// const history = useHistory();
const logoClick = () => {
    console.log('click in the LOGO')
    // history.push('/')
}

const Logo = () => (
    <Link to='/'>
        <div className='logo3bh'>
            <img src={logo}  alt="logo3BH"  onClick = {() => logoClick()} />
        </div>
    </Link>

)


export default Logo



// class MyComponent extends React.Component {      
  
//     render () {
//        const imageClick = () => {
//          console.log('Click');
//        } 
//        return (
//           <div>
//              <img src={require('/myfolder/myimage.png')} onClick={() => imageClick()} />
//           </div>
//        );
//     }
//  }