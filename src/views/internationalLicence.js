import React, { useState } from 'react';
import Navbar from '../components/navbar';
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { AiOutlineUser, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import "../styles/servicesStyle.css";

const NewServiceForm = () => {
  const [serviceType, setServiceType] = useState('');
  const [numberOfServices, setNumberOfServices] = useState(1);
  const [deliveryMethod, setDeliveryMethod] = useState('');
  const [applicantName, setApplicantName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log('Form submitted!');
  };

  return (
    <>
      <Navbar />
      <div className="container fillFormContainer" style={{ marginTop: "10vh" }}>
        <h2 className='specialText fs-3 text-md-center'>International Licence Notebook</h2>
        <form onSubmit={handleSubmit} className='fillForm'>
        
          <div className="form-group mt-2">
            <label htmlFor="numberOfServices">Number of Licences</label>
            <input
              type="number"
              className="form-control"
              id="numberOfServices"
              placeholder="Enter Number of Services"
              value={numberOfServices}
              onChange={(e) => setNumberOfServices(e.target.value)}
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="deliveryMethod"><MdLocationOn className='specialText fs-3'/> How Would You Like to Receive the Service?</label>
            <input
              type="text"
              className="form-control"
              id="deliveryMethod"
              placeholder="Enter Delivery Method"
              value={deliveryMethod}
              onChange={(e) => setDeliveryMethod(e.target.value)}
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="applicantName"><AiOutlineUser className='specialText fs-3'/> Applicant Name</label>
            <input
              type="text"
              className="form-control"
              id="applicantName"
              placeholder="Enter Applicant Name"
              value={applicantName}
              onChange={(e) => setApplicantName(e.target.value)}
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="phoneNumber"><AiOutlinePhone className='specialText fs-3'/> Phone Number</label>
            <input
              type="tel"
              className="form-control"
              id="phoneNumber"
              placeholder="Enter Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="email"><AiOutlineMail className='specialText fs-3'/> Email Address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="container d-flex justify-content-center flex-column align-items-center mt-2">
            <h1 className='serviceFee fs-4'>Service Cost</h1>
            <p className='priceText specialText fs-5'>119 Saudi Riyals</p>
            <p className='priceNotes fs-6'>(Price includes: Service fees, issuance of the international license, and receipt at one of our branches. Does not include delivery fees to home)</p>
          </div>
          <div className="container d-flex justify-content-center mt-3">
            <button type="submit" className="btn btn-primary btn-success">Submit Request <IoCheckmarkDoneSharp className='fs-4' /></button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewServiceForm;
