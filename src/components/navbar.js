import { useState } from 'react';
import './navbar.css';

function Navbar() {
  const [activeList, setActiveList] = useState([true, false, false, false, false, false, false]);

  const setActive = (id) => {
    const newActiveList = activeList.map((item, index) => index === id);
    setActiveList(newActiveList);
  };

  return (
    <nav className="navbar navbar-expand-lg align-items-baseline p-2 m-0">
      <a className="navbar-brand p-1" href="#navbarBrand">
        Fast Service Travel
      </a>
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
            <a className={"nav-link " + (activeList[0] ? "active" : "")} href="#landing">
              Visa
            </a>
          </li>
          <li className="nav-item mx-2" onClick={() => setActive(1)}>
            <a className={"nav-link " + (activeList[1] ? "active" : "")} href="#discover">
              Discover
            </a>
          </li>
          <li className="nav-item mx-2" onClick={() => setActive(2)}>
            <a className={"nav-link " + (activeList[2] ? "active" : "")} href="#tours">
              Tours
            </a>
          </li>
          <li className="nav-item mx-2" onClick={() => setActive(3)}>
            <a className={"nav-link " + (activeList[3] ? "active" : "")} href="#blog">
              Our Blog
            </a>
          </li>
          <li className="nav-item mx-2" onClick={() => setActive(4)}>
            <a className={"nav-link " + (activeList[4] ? "active" : "")} href="#destinations">
              Destinations
            </a>
          </li>
          <li className="nav-item mx-2" onClick={() => setActive(5)}>
            <a className={"nav-link " + (activeList[5] ? "active" : "")}  href="#testimonials">
              Tesimonials
            </a>
          </li>
          <li className="nav-item mx-2" onClick={() => setActive(6)}>
            <a className={"nav-link " + (activeList[6] ? "active" : "")} href="#contact">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
