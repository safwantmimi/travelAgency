import './App.css'; // Main CSS file
import { BrowserRouter ,Routes,Route ,} from 'react-router-dom';
import MainRouters from "./routes/mainRouters/mainRouters.js"
import { useEffect } from 'react';
import { withTranslation,useTranslation } from 'react-i18next';
function App() {
  const { t, i18n } = useTranslation();
  // initilize AR 
  useEffect(() => {
    i18n.changeLanguage('ar');
  }, []);
  
  const isArabic = i18n.language === 'ar';
  const applyRTLStyles = () => {
    if (isArabic) {
      document.body.classList.add('rtl-body');
    } else {
      document.body.classList.remove('rtl-body');
    }
  };

  useEffect(() => {
    applyRTLStyles();
  }, [isArabic]);

  return (
    <>
  <BrowserRouter basename="/">
        <MainRouters className={isArabic ? 'rtl-container' : 'ltr-container'}></MainRouters>
  </BrowserRouter>
 
   </>
  );
}

export default withTranslation()(App);
