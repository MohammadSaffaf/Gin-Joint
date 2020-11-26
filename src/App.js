
import './App.css';
// import Footer from './components/Footer';
// import Header from './components/Header';
// import Section1 from './components/Section1';
// import Section2 from './components/Section2';
// import Section3 from './components/Section3';
// import Section4 from './components/Section4';
// import Section5 from './components/Section5';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
// import Navigation from './components/Navigation';
import HOME from './components/HOME';
import SHOP from './components/SHOP';

import Navigation from './components/Navigation';
import CONTACT from './components/CONTACT';

function App() {
  return (
    <main>
   {/* <HOME/> */}
      <Router>
        <Navigation/>
        {/* <Navigation/> */}
        <Switch>
        <Route path="/" exact component={HOME}/>
       {/* <Route path="/ENTERTAIMENT"  component={ENTERTAIMENT}/> */}
       <Route path="/SHOP" exact component={SHOP}/>
       {/* <Route path="/EVENTS"  component={EVENTS}/> */}
       <Route path="CONTACT" exact component={CONTACT}/>
       <Route path="/*"/>
        </Switch>
        <CONTACT/>
        
        
      
      
      </Router>
      </main>
      


    
  );
}

export default App;
