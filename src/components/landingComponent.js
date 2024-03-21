import React from 'react';
import "../styles/landingComponent.css";

import { NavLink } from 'react-router-dom';

function LandingComponent() {
    return (
    <div className="container-fluid  landingComponent" id="landing">
   <div className="content container-fluid d-flex flex-column justify-content-center align-items-center h-100 row-gap-5">
    <p className='slogan '>Apply For A Visa Now</p>
    <p className='sloganMessage'>With Direct, you can get travel visas with ease</p>
    <NavLink to={"/visaDemand"}>
    <button className="btn btnApply">Apply for visa now !</button>
    </NavLink>
   </div>
  </div>
    );
}
export default LandingComponent;
