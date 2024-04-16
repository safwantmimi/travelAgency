import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useState, forwardRef } from 'react';
import './authEmailAndOtp.css';
import { FaPhone } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { useTranslation } from 'react-i18next'; // Import useTranslation hook for translations

const AuthEmailAndOtp = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(true); // Initially select the Email Address button
  const { t } = useTranslation(); // Initialize useTranslation hook
  const [showPassword,setShowPassword] = useState(false)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false); // Function to close the modal
  const handleToggle = () => setSelected(!selected); // Toggle the state

  const userConnect = (event) => {
    event.preventDefault();
    console.log(event);
  };

  const usePasswd = () => setShowPassword(!showPassword);
  return (
    <div>
      <Button className='d-none' onClick={handleOpen} ref={ref}>
        {t('open_modal', 'Open modal')}
      </Button>
      <Modal
        open={open}
        onClose={handleClose} // Close the modal when clicked outside or on the close button
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box className='modalBox'>
          <h1 className='text-center specialText fs-3'>{t('first_service_travel', 'First Service Travel')}</h1>
          <p className='text-center'>{t('login_direct_account', 'Logging in to a Direct account.')}</p>
          <p className='specialText'>{t('login_using', 'Login using')}</p>
          <button
            className={`btn ${selected ? 'selected' : 'notSelected'}`}
            onClick={handleToggle}
          >
            {t('email_address', 'Email Address')}
          </button>
          <button
            className={`btn ${selected ? 'notSelected' : 'selected'}`}
            onClick={handleToggle}
          >
            {t('phone_number', 'Phone Number')}
          </button>
          
          {selected ? (
            <section className="loginViaEmail mt-3">
              <div className='input-group mb-3 mt-2'>
                <div className='input-group-prepend'>
                  <span className='input-group-text emailIcon h-100' id='basic-addon1'>
                    <MdOutlineMail></MdOutlineMail>
                  </span>
                </div>
                <input
                  type='text'
                  className='form-control h-75 rounded-1'
                  placeholder={t('email_placeholder', 'your email address please ')}
                  aria-label='Username'
                  aria-describedby='basic-addon1'
                  id='emailInput'
                />
              </div>
              { showPassword ? (
                <div className='input-group mb-3 mt-2'>
                  <div className='input-group-prepend'>
                    <span className='input-group-text emailIcon h-100' id='basic-addon1'>
                      <MdOutlineMail></MdOutlineMail>
                    </span>
                  </div>
                  <input
                    type='password'
                    className='form-control h-75 rounded-1'
                    placeholder={t('password_placeholder', 'your password here please ')}
                    aria-label='Password'
                    aria-describedby='basic-addon1'
                    id='passwordInput'
                  />
                </div>
                ) : <>
                </>
              }
              <div className='form-check'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  value=''
                  id='flexCheckDefault'
                />
                <label className='form-check-label' htmlFor='flexCheckDefault'>
                  {t('remember_me', 'Remember me')}
                </label>
              </div>
              <div className="container-fluid mt-2 d-flex justify-content-center d-flex flex-column">
                <button className="btn continueVia" onClick={(event) => {userConnect(event)}}>{t('continue_via_email', 'Continue Via Email')}</button>
                <button className="btn btn-outline-dark outline-dark mt-2" onClick={usePasswd}>{t('sign_in_with_password', 'Sign In With Password')}</button>
              </div>
            </section>
          ) : (
            <section className="loginViaPhone mt-3">
              <div className='input-group mb-3 mt-2'>
                <div className='input-group-prepend'>
                  <span className='input-group-text emailIcon h-100' id='basic-addon1'>
                    <FaPhone></FaPhone>
                  </span>
                </div>
                <input
                  type='tel' 
                  className='form-control h-75 rounded-1'
                  placeholder={t('phone_placeholder', 'your phone number please')}
                  aria-label='Phone Number'
                  aria-describedby='basic-addon1'
                  id='phoneInput'
                />
              </div>
              <div className='form-check'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  value=''
                  id='flexCheckDefault'
                />
                <label className='form-check-label' htmlFor='flexCheckDefault'>
                  {t('remember_me', 'Remember me')}
                </label>
              </div>
              <div className="container-fluid mt-2 d-flex justify-content-center d-flex flex-column">
                <button className="btn continueVia">{t('continue_via_phone', 'Continue Via Phone')}</button>
                <button className="btn btn-outline-dark outline-dark mt-2" onClick={usePasswd}>{t('sign_in_with_password', 'Sign In With Password')}</button>
              </div>
            </section>
          )}

        </Box>
      </Modal>
    </div>
  );
});

export default AuthEmailAndOtp;
