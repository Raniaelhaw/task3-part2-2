import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import {Switch,Route} from 'react-router-dom'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import NotFoundPage from './components/pages/NotFoundPage';
import List from './components/List';
import PersonInput from './components/PersonInput';
function App() {
  return (
    <div>
    <Navbar/>
    <Switch> 
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
      <Route component={NotFoundPage}/>
    </Switch>
    <br/>
    <center>
      <PersonInput/>
    <List/>
    </center>
    
    <br />
    <br />
    <br />
    <br />
    <Footer/>
    </div>
  );
}

export default App;
