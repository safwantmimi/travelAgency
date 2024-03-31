import React, { useState } from 'react';
import Navbar from '../components/navbar';
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { AiOutlineUser, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { MdInsertDriveFile } from "react-icons/md";
import "../styles/servicesStyle.css";
import { useTranslation } from 'react-i18next';

const VehicleInsuranceForm = () => {
  const { t } = useTranslation();
  const [serviceType, setServiceType] = useState('');
  const [driverLicenseFile, setDriverLicenseFile] = useState(null);
  const [vehicleLicenseFile, setVehicleLicenseFile] = useState(null);
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
        <h2 className='specialText fs-3 text-md-center'>{t('vehicleInsurance')}</h2>
        <form onSubmit={handleSubmit} className='fillForm'>
       
         
          <div className="form-group mt-2">
            <label htmlFor="driverLicenseFile"><MdInsertDriveFile className='specialText fs-3' /> {t('driversLicenseForm')}</label>
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input d-none"
                id="driverLicenseFile"
                accept=".pdf"
                onChange={(e) => setDriverLicenseFile(e.target.files[0])}
              />
              <button className="btn custom-file-label submitBtn text-white" htmlFor="driverLicenseFile" onClick={()=>{
                document.getElementById("driverLicenseFile").click()
              }}>{t('chooseFile')}</button>
            </div>
          </div>
          <div className="form-group mt-2">
            <label htmlFor="vehicleLicenseFile"><MdInsertDriveFile className='specialText fs-3' /> {t('vehicleLicenseForm')}</label>
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input d-none"
                id="vehicleLicenseFile"
                accept=".pdf"
                onChange={(e) => setVehicleLicenseFile(e.target.files[0])}
              />
              <button className="btn custom-file-label submitBtn text-white" htmlFor="vehicleLicenseFile" onClick={()=>{
                document.getElementById("vehicleLicenseFile").click()
              }}>{t('chooseFile')}</button>
            </div>
          </div>
          <div className="form-group mt-2">
            <label htmlFor="applicantName"><AiOutlineUser className='specialText fs-3' /> {t('applicantName')}</label>
            <input
              type="text"
              className="form-control"
              id="applicantName"
              placeholder={t('enterApplicantName')}
              value={applicantName}
              onChange={(e) => setApplicantName(e.target.value)}
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="phoneNumber"><AiOutlinePhone className='specialText fs-3' /> {t('phoneNumber')}</label>
            <input
              type="tel"
              className="form-control"
              id="phoneNumber"
              placeholder={t('enterPhoneNumber')}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="email"><AiOutlineMail className='specialText fs-3' /> {t('emailAddress')}</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder={t('enterEmailAddress')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="container d-flex justify-content-center flex-column align-items-center mt-2">
            <h1 className='serviceFee fs-4'>{t('serviceCost')}</h1>
            <p className='priceText specialText fs-5'>{t('serviceFeeIncludingTax')}</p>
            <p className='priceNotes fs-6'>{t('priceNotesVeh')}</p>
          </div>
          <div className="container d-flex justify-content-center mt-3">
            <button type="submit" className="btn btn-primary btn-success">{t('submitRequest')} <IoCheckmarkDoneSharp className='fs-4' /></button>
          </div>
        </form>
      </div>
    </>
  );
};

export default VehicleInsuranceForm;
