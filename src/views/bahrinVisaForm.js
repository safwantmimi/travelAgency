import React, { useState } from 'react';
import Navbar from '../components/navbar';
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { AiOutlineUser, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { useTranslation } from 'react-i18next'; // Import useTranslation hook for translations
import "../styles/servicesStyle.css";

const BahrainVisaForm = () => {
  const [serviceType, setServiceType] = useState('');
  const [passportCount, setPassportCount] = useState(1);
  const [applicantName, setApplicantName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const { t } = useTranslation(); // Initialize useTranslation hook

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log('Form submitted!');
  };

  return (
    <>
      <Navbar />
      <div className="container fillFormContainer" style={{ marginTop: "10vh" }}>
        <h2 className='specialText fs-3 text-md-center'>{t('bahrain_visa_residents', 'Bahrain Visa for Residents')}</h2>
        <form onSubmit={handleSubmit} className='fillForm'>
        
        
          <div className="form-group mt-2">
            <label htmlFor="passportCount">{t('number_of_passports', 'Number of Passports')}</label>
            <input
              type="number"
              min={1}
              className="form-control"
              id="passportCount"
              placeholder={t('enter_passport_count', 'Enter Number of Passports')}
              value={passportCount}
              onChange={(e) => setPassportCount(e.target.value)}
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="applicantName"><AiOutlineUser className='specialText fs-3'/> {t('applicant_name', 'Applicant Name')}</label>
            <input
              type="text"
              className="form-control"
              id="applicantName"
              placeholder={t('enter_applicant_name', 'Enter Applicant Name')}
              value={applicantName}
              onChange={(e) => setApplicantName(e.target.value)}
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="phoneNumber"><AiOutlinePhone className='specialText fs-3'/> {t('phone_number', 'Phone Number')}</label>
            <input
              type="tel"
              className="form-control"
              id="phoneNumber"
              placeholder={t('enter_phone_number', 'Enter Phone Number')}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="email"><AiOutlineMail className='specialText fs-3'/> {t('email_address', 'Email Address')}</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder={t('enter_email_address', 'Enter Email Address')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="container d-flex justify-content-center flex-column align-items-center mt-2">
            <h1 className='serviceFee fs-4'>{t('service_cost', 'Service Cost')}</h1>
            <p className='priceText specialText fs-5'>{t('saudi_riyals', '259 Saudi Riyals')}</p>
          </div>
          <div className="container d-flex justify-content-center mt-3">
            <button type="submit" className="btn btn-primary btn-success">{t('submit_request', 'Submit Request')} <IoCheckmarkDoneSharp className='fs-4' /></button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BahrainVisaForm;
