import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { AiOutlineUser, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { MdLocationCity } from "react-icons/md";
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import "../styles/servicesStyle.css";

const PassportRenewalForm = () => {
  const { t } = useTranslation();
  const [numberOfPassports, setNumberOfPassports] = useState(1);
  const [country, setCountry] = useState('');
  const [applicantName, setApplicantName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [countries, setCountries] = useState([]);
  const [alertMsg, setAlertMsg] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{

      let obj = {
        demandType : "Passport Renewal Service",
        numberOfPassports,
        country,
        applicantName,
        phoneNumber,
        email
      }
      const response = await fetch("http://127.0.0.1:8000/api/demands/client-application", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(obj),
        });

        const responseData = await response.json();
        setShowAlert(true);
        setAlertMsg(responseData.message)
    } catch (error) {
        console.log(error)
        setShowAlert(true);
        setAlertMsg(error);
    }
    event.preventDefault();
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  }

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
      .then(response => {
        const countriesList = response.data.map(country => country.name.common);
        setCountries(countriesList);
      })
      .catch(error => {
        console.log("Failed to load countries");
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="container fillFormContainer" style={{ marginTop: "15vh" }}>
        { showAlert ? (
            <div className='row mt-5'>
              <span className='alert alert-success text-success h2'> {t(alertMsg)} </span>
            </div>

          ) : 
          <> </>
        }
        <h2 className='specialText fs-3 text-md-center'>{t('Passport Renewal Service')}</h2>
        <form onSubmit={handleSubmit} className='fillForm'>
          <div className="form-group mt-2">
            <label htmlFor="numberOfPassports">{t('Number of Passports')}</label>
            <input
              type="number"
              min={1}
              className="form-control"
              id="numberOfPassports"
              placeholder={t('Enter Number of Passports')}
              value={numberOfPassports}
              onChange={(e) => setNumberOfPassports(e.target.value)}
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="country"><MdLocationCity className='specialText fs-3'/> {t('Country')}</label>
            <select
              className="form-control"
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="">{t('Select Country')}</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>{country}</option>
              ))}
            </select>
          </div>
          <div className="form-group mt-2">
            <label htmlFor="applicantName"><AiOutlineUser className='specialText fs-3'/> {t('Applicant Name')}</label>
            <input
              type="text"
              className="form-control"
              id="applicantName"
              placeholder={t('Enter Applicant Name')}
              value={applicantName}
              onChange={(e) => setApplicantName(e.target.value)}
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="phoneNumber"><AiOutlinePhone className='specialText fs-3'/> {t('Phone Number')}</label>
            <input
              type="text"
              className="form-control"
              id="phoneNumber"
              placeholder={t('Enter Phone Number')}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="email"><AiOutlineMail className='specialText fs-3'/> {t('Email Address')}</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder={t('Enter Email Address')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="container d-flex justify-content-center flex-column align-items-center mt-2">
            <h1 className='serviceFee fs-4'>{t('Service Fee')}</h1>
            <p className='priceText specialText fs-5'>259 {t('Saudi Riyal')}</p>
          </div>
          <div className="container d-flex justify-content-center mt-3">
            <button type="submit" className="btn btn-primary btn-success">{t('Submit Demand')} <IoCheckmarkDoneSharp className='fs-4' /></button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PassportRenewalForm;
