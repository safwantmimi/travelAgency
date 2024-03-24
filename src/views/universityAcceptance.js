import React, { useState } from 'react';
import Navbar from '../components/navbar';
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { AiOutlineUser, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import "../styles/servicesStyle.css";

const UniversityAdmissionsForm = () => {
  const [serviceType, setServiceType] = useState('');
  const [studyCountry, setStudyCountry] = useState('');
  const [nationality, setNationality] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [studyLevel, setStudyLevel] = useState('');
  const [toeflOrIelts, setToeflOrIelts] = useState('');
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
        <h2 className='specialText fs-3 text-md-center'>University Admissions</h2>
        <form onSubmit={handleSubmit} className='fillForm'>
        
         
          <div className="form-group mt-2">
            <label htmlFor="studyCountry">Select Country of Study</label>
            <select
              className="form-control"
              id="studyCountry"
              value={studyCountry}
              onChange={(e) => setStudyCountry(e.target.value)}
            >
              <option value="">Select Study Country</option>
              <option value="Canada">Canada</option>
              <option value="Britain">United Kingdom</option>
              <option value="USA">USA</option>
              <option value="Australia">Australia</option>
            </select>
          </div>
          <div className="form-group mt-2">
            <label htmlFor="nationality">Enter Nationality</label>
            <input
              type="text"
              className="form-control"
              id="nationality"
              placeholder="Enter Nationality"
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="paymentMethod">Payment Method for Tuition Fees</label>
            <select
              className="form-control"
              id="paymentMethod"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="">Select Payment Method</option>
              <option value="Government Bourse">Government Bourse</option>
              <option value="Own Sponsorship">Own Sponsorship</option>
            </select>
          </div>
          <div className="form-group mt-2">
            <label htmlFor="studyLevel">Select Study Level</label>
            <select
              className="form-control"
              id="studyLevel"
              value={studyLevel}
              onChange={(e) => setStudyLevel(e.target.value)}
            >
              <option value="">Select Study Level</option>
              <option value="Secondary">Secondary</option>
              <option value="Baccalaureate">Baccalaureate</option>
              <option value="Master">Master</option>
            </select>
          </div>
          <div className="form-group mt-2">
            <label htmlFor="toeflOrIelts">Do you have TOEFL or IELTS certificate?</label>
            <select
              className="form-control"
              id="toeflOrIelts"
              value={toeflOrIelts}
              onChange={(e) => setToeflOrIelts(e.target.value)}
            >
              <option value="">Select Response</option>
              <option value="I have TOEFL">I have TOEFL</option>
              <option value="I have IELTS">I have IELTS</option>
              <option value="None">None</option>
            </select>
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
            <p className='priceText specialText fs-5'>Service cost will be determined after contacting one of our educational consultants.</p>
          </div>
          <div className="container d-flex justify-content-center mt-3">
            <button type="submit" className="btn btn-primary btn-success">Submit Request <IoCheckmarkDoneSharp className='fs-4' /></button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UniversityAdmissionsForm;
