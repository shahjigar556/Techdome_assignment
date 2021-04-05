import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import Landing from './pages/Landing';
import Filters from './components/Filters';
import './App.css';
import './bootstrap.min.css'

import Land from './pages/Land.js';
import Year from './pages/Year';
import Launch from './pages/Launch';

function App() {
  return (
    <React.Fragment>
         <h1 className="text-center mt-1">SpaceX launch Programs</h1>
         <Route exact path ='/' component={Landing} />    
         <Route exact path='/year/:year' component={Year} />
         <Route exact path='/launch/:launch' component={Launch} />
         <Route exact path='/land/:land' component={Land} />
    </React.Fragment>
  );
}

export default App;
