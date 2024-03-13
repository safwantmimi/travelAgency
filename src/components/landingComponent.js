import React from 'react';
import "./landingComponent.css";
import "./coming-sssoon.css"
import { Link } from 'react-router-dom';

function LandingComponent() {
    return (
   
            <div className="main ">
                <div className="cover black" data-color="black"></div>
                <div className="container">
                    <h1 className="logo cursive h1" id='brandLogo'>Fast Travel Service</h1>
                    <div className="content">
                        <h4 className="motto">Explore the world with Fast Travel Service.</h4>
                        <div className="subscribe">
                            <h5 className="info-text">Join our mailing list to receive exclusive travel offers and updates.</h5>
                            <div className="row">
                                <div className="col-md-4  col-sm-6  col-xl-12 d-flex justify-content-center gap-2">
                                    <form className="form-inline" role="form">
                                       <Link to={"/createAccount"}>
                                       <button type="button" className="btn btn-danger btn-fill mx-2">Create Account</button>
                                       </Link> 
                                       <Link to={"/login"}>
                                        <button type="submit" className="btn btn-danger btn-fill login">Login</button>
                                        </Link>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}
export default LandingComponent;
