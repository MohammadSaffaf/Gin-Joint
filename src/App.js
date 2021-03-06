import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import HOME from './components/HOME';
import SHOP from './components/SHOP';

import Navigation from './components/Navigation';


import Entertaiment from './components/Entertainment';
import Event from './components/Event';
import Section5 from './components/Section5';
import Footer from './components/Footer';
import CONTACT from './components/CONTACT';


function App() {
  return (
    
        <Router>
        <Navigation/>
        
        <Switch>
        <Route path="/" exact component={HOME} />
       <Route path="/Entertaiment"  component={Entertaiment}/>
       <Route path="/SHOP"  component={SHOP} />
       <Route path="/EVENTS"  component={Event}/>
       <Route path="/CONTACT"  component={CONTACT} />
       
       
        </Switch>
        <Section5/>
        <Footer/>
      </Router>
      
    
  );
}

export default App;
