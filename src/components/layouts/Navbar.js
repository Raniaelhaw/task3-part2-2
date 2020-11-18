import React from 'react';
import { Link} from 'react-router-dom';

 function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span>
            <i className="fas fa-bars" style={{ color:'#fff'}}/>
          </span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            <li className="nav-item active">
              <Link  className="nav-link text-white text-uppercase ml-5" to="/">Home&nbsp;<i class="fas fa-home"></i> 
              <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link  className="nav-link text-white text-uppercase ml-5" to="about">ABOUT US</Link >
            </li>
            <li className="nav-item">
              <Link  className="nav-link text-white text-uppercase ml-5" to="contact">Contact us</Link >
            </li>
           
            
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav> 
    );
}
export default Navbar;