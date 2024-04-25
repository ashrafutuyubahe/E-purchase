import React from "react";
import "./nav.css";
// import 'bootstrap/dist/css/bootstrap.min.css';


export default function nav() {
  return(
  <>
  <nav className="navbar">
      <div className="nav-links">
      <a href="/">Home</a>
      <a href="#">Store</a>
      <a href="login">Login</a>
      <a href="register">Register</a>  
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
