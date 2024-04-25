import React from "react";
import  "./nav.css";

// import 'bootstrap/dist/css/bootstrap.min.css';
import {Link } from "react-router-dom";



export default function nav() {
  return(
  <>
  <nav className="navbar">
      <div className="nav-links">
      <Link  className=" link-1 m-3" to="/login" >Login</Link>
      <Link to="/register" className="link-2 m-3"  >Register</Link>
      
      </div>
    <input  type="text" placeholder="search..." id="search"></input>
    <span className="icon">
          <i className="fas fa-shopping-cart"></i>
        </span>
        <span className="icon">
          <i className="fas fa-search"></i>
          </span>


   
      </nav>
    
    
  </>
   
  )
}
