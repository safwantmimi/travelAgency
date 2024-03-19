import React from 'react';
import "./landingComponent.css";

import { Link } from 'react-router-dom';

function LandingComponent() {
    return (
    <div className="container-fluid bg-warning landingComponent" id="landing">
   <div className="content container-fluid d-flex flex-column justify-content-center align-items-center h-100 row-gap-5">
    <p className='slogan '>Apply For A Visa Now</p>
    <p className='sloganMessage'>With Direct, you can get travel visas with ease</p>
    <button className="btn btnApply">Apply for visa now !</button>
   </div>
  </div>
    );
}
export default LandingComponent;
