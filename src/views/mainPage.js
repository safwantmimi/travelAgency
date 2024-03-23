import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Testimonials from './testimonials';
import Discover from './discover';
import Blog from './blog';
import LandingComponent from '../components/landingComponent';
import Tours from './tours';
import Countries from "./countries";
import Footer from './footer';
import Navbar from '../components/navbar';
import Services from './services';
import Loader from "./loading";
import { Suspense } from 'react';

export default function MainPage() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      {showLoader ? (
        <Loader />
      ) : (
        <>
          <LandingComponent />
          <Services />
          <Discover />
          <Tours />
          <Blog />
          <Countries />
          <Testimonials />
          <Footer />
        </>
      )}
    </>
  );
}
