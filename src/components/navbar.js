import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './navbar.css';

import logo from "../images/logo.png"
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { withTranslation } from 'react-i18next';
import LangSwitcher from './langSwitcher';

function Navbar() {
  const { t,i18n } = useTranslation();
  const [activeList, setActiveList] = useState([true, false, false, false, false, false, false]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const setActive = (id) => {
    const newActiveList = activeList.map((item, index) => index === id);
    setActiveList(newActiveList);
  };

  const [pageData, setPageData] = useState(null); // State to store fetched data

  // Fetch page data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/pages?title=Home'); 
        setPageData(response.data);
      } catch (error) {
        console.error('Error fetching page data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <nav className="navbar navbar-expand-lg align-items-baseline p-2 m-0">
      <Link className="navbar-brand p-1" to="/">
       <h1 className='specialText'> {t('title','Fast Service Travel')}</h1>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={toggleMenu}      
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
        <ul className={`navbar-nav ${isMenuOpen ? 'd-block' : 'd-flex'} flex-row col mx-5 justify-content-center gap-4`} id='navbarNav'>
          <li className="nav-item mx-2" onClick={() => setActive(0)}>
            <a className={"nav-link " + (activeList[0] ? "active" : "")} href="/#landing">
              {t('visa','Visa')}
            </a>
          </li>
          <li className="nav-item mx-2" onClick={() => setActive(1)}>
            <a className={"nav-link " + (activeList[1] ? "active" : "")} href="/#discover">
              {t('discover','Discover')}
            </a>
          </li>
          <li className="nav-item mx-2" onClick={() => setActive(2)}>
            <a className={"nav-link " + (activeList[2] ? "active" : "")} href="/#tours">
              {t('tours','Tours')}
            </a>
          </li>
          <li className="nav-item mx-2" onClick={() => setActive(3)}>
            <a className={"nav-link " + (activeList[3] ? "active" : "")} href="/#blog">
              {t('our blog','Our Blog')}
            </a>
          </li>
          <li className="nav-item mx-2" onClick={() => setActive(4)}>
            <a className={"nav-link " + (activeList[4] ? "active" : "")} href="/#destinations">
              {t('destinations','Destinations')}
            </a>
          </li>
          <li className="nav-item mx-2" onClick={() => setActive(5)}>
            <a className={"nav-link " + (activeList[5] ? "active" : "")}  href="/#testimonials">
              {t('testimonials','Tesimonials')}
            </a>
          </li>
          <li className="nav-item mx-2" onClick={() => setActive(6)}>
            <a className={"nav-link " + (activeList[6] ? "active" : "")} href="/#contact">
              {t('contact us','Contact Us')}
            </a>
          </li>
        </ul>
      <LangSwitcher/>
      </div>

    </nav>
  );
}

export default Navbar;
