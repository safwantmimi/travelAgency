import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
 import './i18n/i18n';
const root = ReactDOM.createRoot(document.getElementById('root'));


if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('Service Worker registered:', registration);
      })
      .catch(error => {
        console.error('Service Worker registration failed:', error);
      });
  });
}

root.render(
  <React.StrictMode>
    {/* <React.Suspense fallback="loading"> */}
      <App></App>
    {/* </React.Suspense> */}
  
  </React.StrictMode>
);
reportWebVitals();
