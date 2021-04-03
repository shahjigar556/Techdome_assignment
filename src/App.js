import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import Landing from './pages/Landing';
import Filters from './components/Filters';
import './App.css';
import './bootstrap.min.css'

function App() {
  return (
    <React.Fragment>
         <h1 className="text-center">SpaceX launch Programs</h1>
         <Route exact path ='/' component={Landing} />
    </React.Fragment>
  );
}

export default App;
