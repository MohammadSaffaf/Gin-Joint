
import './App.css';

import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import HOME from './components/HOME';
import SHOP from './components/SHOP';

import Navigation from './components/Navigation';

import Contact from './components/Contact';
import Entertaiment from './components/Entertainment';
import Event from './components/Event';
import Section5 from './components/Section5';
import Footer from './components/Footer';

function App() {
  return (
    
  
      <Router>
        <Navigation/>
        
        <Switch>
        <Route path="/" exact component={HOME} />
       <Route path="/Entertaiment"  component={Entertaiment}/>
       <Route path="/SHOP"  component={SHOP} />
       <Route path="/EVENTS"  component={Event}/>
       <Route path="Contact"  component={Contact} />
       <Contact/>
       
        </Switch>
        
        <Section5/>
        <Footer/>
       
      
      </Router>
      
      


    
  );
}

export default App;
