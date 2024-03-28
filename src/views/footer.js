import React from 'react';

import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../styles/footer.css";
export default function Footer() {
  return (
    <div className="footer container-fluid p-4">
        <div className="row m-0  ">
            <div className="col-lg-3 col-sm-12 d-flex flex-column navigationContainer">
                <a>Navigation</a>
                <a>tours</a>
                <a>Reviews</a>
                <a>Blog</a>
                <a>FAQs</a>
            </div>
            <div className="col-lg-3 col-sm-12 d-flex flex-column navigationContainer">
                <a>Socials</a>
                <div className="icons d-flex gap-2">
                    <FaFacebook></FaFacebook>
                    <FaLinkedin></FaLinkedin>
                    <MdEmail></MdEmail>
                </div>
            </div>
            <div className="col-lg-3 col-sm-12 d-flex flex-column navigationContainer">
                <a>Contact us</a>
                <a>info@fastservicetravel.com</a>
            </div>
            <div className="col-lg-3 col-sm-12 d-flex flex-column navigationContainer">
                <a>Location</a>
                <a>Riyadh ,Saudi Arabia</a>
            </div>
        </div>
        <div className="row m-0 mt-5 p-0 logoAndInformations">
            <div className="container-fluid">
                <p className="logo">Fast Service Travel <span className="specialText">.</span></p>
            </div>
            <div className="row  m-0 p-0 privacyInformation">
             
                <div className="col-lg-6 col-md-12">
                    <a href='' className='mx-2' >Privacy Policy</a>
                    <a href='' className='mx-2' >Public Offer</a>
                </div>
                <div className="col-lg-6 col-md-12 d-flex justify-content-end">
                <span className="fs-5">&copy; Created in {new Date().getFullYear()}</span>
                
                </div>
            </div>

        </div>
    </div>
  )
}
