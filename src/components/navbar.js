import React, { useState } from 'react';
import './navbar.css';
import logo from "../images/logo.png"
import { Link } from 'react-router-dom';

function Navbar() {
  const [activeList, setActiveList] = useState([true, false, false, false, false, false, false]);

  const setActive = (id) => {
    const newActiveList = activeList.map((item, index) => index === id);
    setActiveList(newActiveList);
  };

  return (
    <nav className="navbar navbar-expand-lg align-items-baseline p-2 m-0">
      <Link className="navbar-brand p-1" to="/">
        <img src={logo} alt="First Service Travel:" className='navbarLogo' />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav d-flex flex-row col mx-5 justify-content-center gap-4" id='navbarNav'>
          <li className="nav-item mx-2" onClick={() => setActive(0)}>
            <a className={"nav-link " + (activeList[0] ? "active" : "")} href="http://localhost:3000/#landing">
              Visa
            </a>
          </li>
          <li className="nav-item mx-2" onClick={() => setActive(1)}>
            <a className={"nav-link " + (activeList[1] ? "active" : "")} href="http://localhost:3000/#discover">
              Discover
            </a>
          </li>
          <li className="nav-item mx-2" onClick={() => setActive(2)}>
            <a className={"nav-link " + (activeList[2] ? "active" : "")} href="http://localhost:3000/#tours">
              Tours
            </a>
          </li>
          <li className="nav-item mx-2" onClick={() => setActive(3)}>
            <a className={"nav-link " + (activeList[3] ? "active" : "")} href="http://localhost:3000/#blog">
              Our Blog
            </a>
          </li>
          <li className="nav-item mx-2" onClick={() => setActive(4)}>
            <a className={"nav-link " + (activeList[4] ? "active" : "")} href="http://localhost:3000/#destinations">
              Destinations
            </a>
          </li>
          <li className="nav-item mx-2" onClick={() => setActive(5)}>
            <a className={"nav-link " + (activeList[5] ? "active" : "")}  href="http://localhost:3000/#testimonials">
              Tesimonials
            </a>
          </li>
          <li className="nav-item mx-2" onClick={() => setActive(6)}>
            <a className={"nav-link " + (activeList[6] ? "active" : "")} href="http://localhost:3000/#contact">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
