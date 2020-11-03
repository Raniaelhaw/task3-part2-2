import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <div>
    <Navbar/>
    <br/>
    <Home />
    <br />
    <br />
    <br />
    <br />
    <Footer/>
    </div>
  );
}

export default App;
