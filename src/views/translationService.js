import React, { useState } from 'react';
import Navbar from '../components/navbar';
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { AiOutlineUser, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { MdInsertDriveFile } from "react-icons/md";
import "../styles/servicesStyle.css";

const TranslationServiceForm = () => {
  const [serviceType, setServiceType] = useState('');
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [file, setFile] = useState(null);
  const [content, setContent] = useState('');
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
        <h2 className='specialText fs-3 text-md-center'>Translation Service</h2>
        <form onSubmit={handleSubmit} className='fillForm'>
       
          <div className="form-group mt-2">
            <label htmlFor="numberOfPages">Approximate Number of Pages</label>
            <input
              type="number"
              className="form-control"
              id="numberOfPages"
              placeholder="Enter Number of Pages"
              value={numberOfPages}
              onChange={(e) => setNumberOfPages(e.target.value)}
            />
          </div>
          <div className="form-group mt-2">
  <label htmlFor="file"><MdInsertDriveFile className='specialText fs-3' /> Attach the Required File (Optional)</label>
  <div className="custom-file">
    <input
      type="file"
      className="custom-file-input d-none"
      id="file"
      accept=".jpg, .jpeg, .png, .pdf"
      onChange={(e) => setFile(e.target.files[0])}
    />
    <button className="btn custom-file-label submitBtn text-white" htmlFor="file" onClick={()=>{
      document.getElementById("file").click()
    }}>Choose file</button>
  </div>
</div>

          <div className="form-group mt-2">
            <label htmlFor="content">Type of Content to be Translated</label>
            <textarea
              className="form-control"
              id="content"
              rows="3"
              placeholder="Enter Type of Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group mt-2">
            <label htmlFor="applicantName"><AiOutlineUser className='specialText fs-3' /> Applicant Name</label>
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
            <label htmlFor="phoneNumber"><AiOutlinePhone className='specialText fs-3' /> Phone Number</label>
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
            <label htmlFor="email"><AiOutlineMail className='specialText fs-3' /> Email Address</label>
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
            <h1 className='serviceFee fs-4'>Service Fee</h1>
            <p className=' specialText fs-5'>259 Saudi Riyal</p>
            <p className="priceNotes">The price will be determined after reviewing the documents to be translated.</p>
          </div>
          <div className="container d-flex justify-content-center mt-3">
            <button type="submit" className="btn btn-primary btn-success">Submit Request <IoCheckmarkDoneSharp className='fs-4' /></button>
          </div>
        </form>
      </div>
    </>
  );
};

export default TranslationServiceForm;
