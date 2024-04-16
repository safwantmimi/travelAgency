import React, { useRef, useState } from 'react';
import Navbar from '../components/navbar';
import { FaPlus } from 'react-icons/fa6';
import { FaMinus } from 'react-icons/fa6';
import { MdNavigateNext } from 'react-icons/md';
import AuthEmailAndOtp from '../components/authEmailAndOtp';
import Calendar from 'react-calendar';
import { GrLinkNext } from "react-icons/gr";
import { FaPerson } from "react-icons/fa6";
import { GrLinkPrevious } from "react-icons/gr";
import { useTranslation } from 'react-i18next';

import '../styles/visaDemand.css';
const countries = require('../dataSources/countries');

export default function VisaDemand() {
  const { t,i18n } = useTranslation();
  const isArabic = i18n.language.includes('ar');
  const [activeStates, setActiveStates] = useState([
    'visaStepActive',
    'visaStepNotActive',
    'visaStepNotActive',
    'visaStepNotActive'
  ]);
  const [totalCost, setTotalCost] = useState(0);
  const [travelersVector, setTravelersVector] = useState([]);
  const [countriesCopy, setCountriesCopy] = useState(countries);
  const [activePerson,setActivePerson]=useState(0);
  const stepOne=useRef(null);
  const stepTwo=useRef(null);
  const stepThree=useRef(null);
  const stepFour=useRef(null);
  const modalOpener=useRef(null);
  const HandleActivePersonPlus=()=>{
    if(activePerson<visaData.noOfTraverlers)
    {
      setActivePerson(activePerson+1);
    }
    
  };
  const HandleActivePersonMinus=()=>{
    if(activePerson>=1)
    {
      setActivePerson(activePerson-1);
    }
    
  };
  const [visaData, setVisaData] = useState({
    country: '',
    visaType: '',
    visaDate: '',
    noOfTraverlers: 0
  });
  const changeVisaDate = event => {
    let date = new Date(event);
    var day = date.getDate().toString().padStart(2, '0');
    var month = (date.getMonth() + 1).toString().padStart(2, '0');
    var year = date.getFullYear();
    date = day + '-' + month + '-' + year;

    setVisaData({ ...visaData, visaDate: date });
  };
  const setTravelers = updateValue => {
    let noOfTraverlers = visaData.noOfTraverlers + updateValue;
    if (noOfTraverlers >= 0) {
      setVisaData({ ...visaData, noOfTraverlers });
    }
    let v=[];
    for(var i=0;i<noOfTraverlers;i++)
    {
      v.push(0);
    }

    setTravelersVector(v);
    calculateCost(noOfTraverlers);
  };
  const searchCountry = event => {
    setCountriesCopy(
      countries.filter(country => {
        return (
          country.countryName
            .toLowerCase()
            .indexOf(event.target.value.toLowerCase()) != -1
        );
      })
    );
  };
  const calculateCost = (noOfTraverlers) => {
    const visaCost = countries.filter(element => {
      return element.countryName === visaData.country;
    });
    setTotalCost(visaCost[0].pricePerPerson *noOfTraverlers);
  };

  const [alertMsg, setAlertMsg] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{

      let obj = {
        demandType : 'Visa Demand',
        ...visaData
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

  return (
    <>
      <Navbar />
      <div className='visaContainer row d-flex justify-content-center h-100'>
        <div className='container VisaStepsContainer  d-flex flex-wrap p-2 px-0 '>
          <button
            className={
              'col-lg-3 col-md-6 col-sm-12 visaStep ' + activeStates[0]
            }
            onClick={() => {
              setActiveStates([
                'visaStepActive',
                'visaStepNotActive',
                'visaStepNotActive',
                'visaStepNotActive'
              ]);
              stepOne.current.classList.remove("d-none");
              stepTwo.current.classList.add("d-none");
              stepThree.current.classList.add("d-none");
            }}
          >
            <span>{t('step 1')} :</span> {t('selectCountryAndVisaType')}
          </button>
          <button
            className={
              'col-lg-3 col-md-6 col-sm-12 visaStep ' + activeStates[1]
            }
            onClick={() => {
              setActiveStates([
                'visaStepNotActive',
                'visaStepActive',
                'visaStepNotActive',
                'visaStepNotActive'
              ]);
              stepOne.current.classList.add("d-none");
              stepTwo.current.classList.remove("d-none");
              stepThree.current.classList.add("d-none");
            }}
          >
            <span>{t('step 2')}  :</span> {t('travelersDetails')}
          </button>
          <button
            className={
              'col-lg-3 col-md-6 col-sm-12 visaStep ' + activeStates[2]
            }
            onClick={() => {
              setActiveStates([
                'visaStepNotActive',
                'visaStepNotActive',
                'visaStepActive',
                'visaStepNotActive'
              ]);
              stepOne.current.classList.add("d-none");
              stepTwo.current.classList.add("d-none");
              stepThree.current.classList.remove("d-none");
            }}
          >
            <span>{t('step 3')} :</span> {t('passengerInformation')}
          </button>
          <button
            className={
              'col-lg-3 col-md-6 col-sm-12 visaStep ' + activeStates[3]
            }
            onClick={() => {
              setActiveStates([
                'visaStepNotActive',
                'visaStepNotActive',
                'visaStepNotActive',
                'visaStepActive'
              ]);
            }}
          >
            <span>{t('step 4')} :</span> {t('appointmentAndPayment')}
          </button>
        </div>
        { showAlert ? (
            <div className='row mt-5'>
              <span className='alert alert-success text-success h2'> {t(alertMsg)} </span>
            </div>

          ) : 
          <> </>
        }
        <section className='stepOne d-flex justify-content-center' ref={stepOne}>
          <div className='visaStep1Container  col-lg-10 mt-2 p-0 bg-white py-2'>
            <h1 className='text-center fs-3'>
              {t('selectCountryAndVisaType')}
            </h1>
            <div className='container col-lg-10 col.sm-12 searchZone '>
              <input
                type='text'
                className='searchInput'
                placeholder={t('searchForCountry')}
                onChange={event => {
                  searchCountry(event);
                }}
              />
            </div>
            <div className='visaCountriesCountainer  mt-2 col-12 row-gap-2 column-gap-2 d-flex flex-wrap justify-content-center m-0 p-0'>
              {countriesCopy.map((country, index) => {
                return (
                  <div
                    key={index}
                    className='card countryVisaCard col-lg-3 col-md-4 col-sm-5 pb-2'
                  >
                    <img
                      src={require(`../images/countriesAMFlags/${country.path}`)}
                      className='card-img-top p-0 countryImageV'
                      alt='...'
                    />
                    <div className='card-footer countryNameOverlay'>
                      <span className='countryName'>{t(`${country.countryName}`)}</span>
                    </div>
                    <div className='card-footer d-flex justify-content-center'>
                      <div className='dropdown'>
                        <div className='choices card-footer'>{t('choicesHere')}</div>
                        <div className='dropdown'>
                          <button
                            className='btn btn-secondary dropdown-toggle startVisaButton'
                            type='button'
                            id='dropdownMenuButton'
                            data-bs-toggle='dropdown'
                            aria-haspopup='true'
                            aria-expanded='false'
                          >
                            {t('startVisaDemand')}
                          </button>
                          <div
                            className='dropdown-menu p-2 dropDownContainer   text-center'
                            id='dropdown'
                            aria-labelledby='dropdownMenuButton'
                          >
                            {country.visaTypes.map((type, index) => {
                              return (
                                <button
                                  key={index}
                                  className='btn btn-primary mt-2 visaTypeButton'
                                  onClick={() => {
                                    setVisaData({
                                      ...visaData,
                                      country: country.countryName,
                                      visaType: type
                                    });
                                    setActiveStates([
                                      'visaStepNotActive',
                                      'visaStepActive',
                                      'visaStepNotActive',
                                      'visaStepNotActive'
                                    ]);
                                    stepOne.current.classList.add("d-none");
                                    stepTwo.current.classList.remove("d-none");
                                    stepThree.current.classList.add("d-none");
                                  }}
                                >
                                  {t(`${type}`)}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className='stepTwo d-none d-flex align-items-center flex-column' ref={stepTwo}>
          <div className='visaStep1Container col-lg-10 mt-2 p-0 bg-white py-2'>
            <h1 className='text-center fs-3'>
              {t('expectedTravelDate')}
            </h1>
            <div className='calendarContainer container-fluid p-2'>
              <Calendar
                className='calendar h-100 w-100'
                onChange={event => {
                  changeVisaDate(event);
                }}
                
              />
            </div>
            <h1 className='text-center mt-2'>{t('expectedTravelDate')} :</h1>
            <p className='travelDate text-center'>{visaData.visaDate}</p>
          </div>
          <div className='visaStep1Container col-lg-10 mt-2 p-0 bg-white py-2'>
            <h1 className='text-center fs-3'>
              {t('chooseNumberOfTravelers')}
            </h1>
            <div className='row p-2'>
              <div className=' visaDataContainer row d-flex justify-content-center m-0'>
                <div className='row travelersInfosContainer d-flex  m-0 align-items-center'>
                  <div className='col infoContainer'>{t('numberOfTravelers')}</div>
                  <div className='col d-flex m-0  infoContainer justify-content-around'>
                    <button className='btn btn-outline'>
                      <FaMinus
                        className='setTravelersButton'
                        onClick={() => {
                          setTravelers(-1);
                        }}
                      />
                    </button>
                    <p className='numberOfTrav m-0 p-0'>
                      {visaData.noOfTraverlers}
                    </p>
                    <button className='btn btn-outline'>
                      <FaPlus
                        className='setTravelersButton'
                        onClick={() => {
                          setTravelers(1);
                        }}
                      />
                    </button>
                  </div>
                  <div className='col infoContainer m-0 p-0 '>
                    <span className='cost mx-2'>
                      {' '}
                      {totalCost}{' '}
                    </span>{' '}
                    {t('Saudi Riyal')}
                  </div>
                </div>
                <div className='row travelersInfosContainer d-flex  m-0  align-items-center'>
                  <div className='col infoContainer'>{t('haveCoupon')}</div>
                  <div className='col  m-0 p-0 infoContainer couponContainer '>
                    <input
                      type='text'
                      name='couponValue'
                      id='couponValue'
                      placeholder={t('writeYourCoupon')}
                    />
                  </div>
                  <div className='col infoContainer m-0 '>
                    <button
                      className='btn btn-primary applyCouponBtn'
                      onClick={calculateCost}
                    >
                      {t('applyCoupon')}
                    </button>
                  </div>
                </div>
                <div className='row totalCost  m-0 p-2 text-center'>
                  <p className='totalCostHeader'>{t('totalCost')}</p>
                  <p className='travelDate text-center'>
                    {totalCost} {t('Saudi Riyal')}
                  </p>
                  <p className='alert alert-success text-success h2'>
                    {t('priceIncludes')}
                  </p>
                </div>
              </div>
            </div>
            <div className='container-fluid p-2 text-center r'>
              <button
                className='btn btn-primary p-2 submitBTN'
                onClick={() => {
                  setActiveStates([
                    'visaStepNotActive',
                    'visaStepNotActive',
                    'visaStepActive',
                    'visaStepNotActive'
                  ]);
               
                  stepOne.current.classList.add("d-none");
                  stepTwo.current.classList.add("d-none");
                  stepThree.current.classList.remove("d-none");
                  modalOpener.current.click();
                }}
              >
                {t('nextStep')} : {t('fillPassengerData')}{' '}
              </button>
            </div>
          </div>
        </section>
        <AuthEmailAndOtp className="d-none" ref={modalOpener}></AuthEmailAndOtp>
        <section className='stepTwo d-none d-flex align-items-center flex-column' ref={stepThree}>
          <div className='visaStep1Container col-lg-10 mt-2 p-0 bg-white py-2'>
            <h1 className='text-center fs-3'>
              {t('fillPassengerData')}
            </h1>
            <div className="container-fluid d-flex column-gap-5 justify-content-center">
              {
              travelersVector.map((element,index)=>{
                if(index===activePerson){
                  return (
                    <FaPerson className="fs-1  personAvatar activePersonAvatar" key={'person' +index}></FaPerson>
                  )}
                else if (index<activePerson){
                  return (
                  <FaPerson className="fs-1  personAvatar donePersonAvatar" key={'person' +index}></FaPerson>
                )}
                else
                {
                  return (
                    <FaPerson className="fs-1  personAvatar " key={'person' +index}></FaPerson>
                  )
                }
               
              })
              }
            </div>
            <div className='calendarContainer container-fluid p-2'>
            <form>
  <div className="form-group mt-2">
    <label  className="specialText" htmlFor="inputName">{t('name')}</label>
    <input type="text" className="form-control" id="inputName" placeholder={t('enterYourName')} />
  </div>
  <div className="form-group mt-2">
    <label  className="specialText" htmlFor="inputFirstName">{t('firstName')}</label>
    <input type="text" className="form-control" id="inputFirstName" placeholder={t('enterYourFirstName')} />
  </div>
  <div className="form-group mt-2">
    <label  className="specialText" htmlFor="inputGender">{t('gender')}</label>
    <select className="form-control" id="inputGender">
      <option>{t('male')}</option>
      <option>{t('female')}</option>
      <option>{t('other')}</option>
    </select>
  </div>
  <div className="form-group mt-2">
    <label  className="specialText" htmlFor="inputEmail">{t('emailAddress')}</label>
    <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder={t('enterEmail')} />
    <small id="emailHelp" className="form-text text-muted">{t('weNeverShare')}</small>
  </div>
  <div className="form-group mt-2">
    <label  className="specialText" htmlFor="inputPhoneNumber">{t('phoneNumber')}</label>
    <input type="text" className="form-control" id="inputPhoneNumber" placeholder={t('enterYourPhoneNumber')} />
  </div>
  <div className="form-group mt-2">
    <label  className="specialText" htmlFor="inputDateOfBirth">{t('dateOfBirth')}</label>
    <input type="date" className="form-control" id="inputDateOfBirth" />
  </div>
  <div className="form-group mt-2">
    <label  className="specialText" htmlFor="inputPassportScan">{t('passportScan')}</label>
    <br />
    <input type="file" className="form-control-file" id="inputPassportScan" />
    <small id="passportScanHelp" className="form-text text-muted">{t('uploadScan')}</small>
  </div>
  <div className="container-fluid d-flex justify-content-center column-gap-1">
  {! isArabic ? (
  <>
      <button type="button" className="btn nextPerson" onClick={HandleActivePersonMinus}><GrLinkPrevious className='mx-2'></GrLinkPrevious> {t('previousPerson')}</button>
    
    <button type="button" className="btn nextPerson" onClick={HandleActivePersonPlus}>{t('nextPerson')}  <GrLinkNext className='mx-2'></GrLinkNext></button>
  </>
) : (
  <>
      <button type="button" className="btn nextPerson" onClick={HandleActivePersonMinus}>
      <GrLinkNext className='mx-2'></GrLinkNext> {t('previousPerson')}
    </button>
    <button type="button" className="btn nextPerson" onClick={HandleActivePersonPlus}>
    {t('nextPerson')} <GrLinkPrevious className='mx-2'></GrLinkPrevious> 
    </button>

  </>
)}

  </div>
</form>
            </div>
            </div>
            </section>
      </div>
    </>
  );
}
