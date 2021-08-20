import logo from './logo.svg';
import './App.css';
import HomePage from './components/pages/home/home.component';
import Proyectos from './components/proyectos/ProyectosAll.component';
import ProyectosDetail from './components/proyectos/ProyectosDetail.component';

import PaginaProyectoDetail from './components/pages/Proyecto/PaginaProyectoDetail.component'

import { Switch, Route } from 'react-router-dom';

function App( match ) {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        {/* <Route path='/proyectos' component={Proyectos} /> */}
        {/* <Route path='/proyectos' component={Proyectos} /> */}
        {/* <Route exact path={`${match.url}/proyectos/:itemId`} component={ProyectosDetail} /> */}
        <Route exact path={`/proyectos/:itemId`} component={PaginaProyectoDetail} />

      </Switch>  
    </div>
  );
}

export default App;
