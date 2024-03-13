import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/navbar';
import Testimonials from './views/testimonials';
import Discover from './views/discover';
import Blog from './views/blog';
import LandingComponent from './components/landingComponent';
import Tours from './views/tours';
import Footer from './views/footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>  
    <BrowserRouter basename="/">

    <div className='p-2 '>
    <LandingComponent ></LandingComponent>
    <Discover></Discover>
    <Tours></Tours>
    <Blog></Blog>
    <Testimonials></Testimonials>
    <Footer></Footer>
    </div>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
