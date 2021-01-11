import React from 'react';
import './App.css';
import Home from './Home.js';
import About from './About.js';
import Videos from './Videos.js';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/about" component={About}/>
             <Route path="/videos" component={Videos}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    </div>
  );
}

export default App;
