import React from 'react';
import './Landing.css';
import {Link} from "react-router-dom";

const Landing = () => {
  return (
   
    <div className="landing-container">

  <h1 className="welcome-message">¡Welcome!</h1>
  
    <Link  to="/home">
      <button className="buttonCss">Home</button>
    </Link>
  </div>


   


  );
};

export default Landing;
