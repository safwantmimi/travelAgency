import React from 'react';
import "../styles/countries.css";
import { useTranslation } from 'react-i18next'; // Import useTranslation hook for translations

const countryList = [
  "United Kingdom",
  "Czech Republic",
  "Finland",
  "Norway",
  "Switzerland",
  "Ireland",
  "Italy",
  "France",
  "Spain",
  "Greece",
  "Turkey",
  "Germany",
  "United States"
];

const pictures = [
  require("../images/uk.jpg"),
  require("../images/czech.jpg"),
  require("../images/finland.jpg"),
  require("../images/norway.jpg"),
  require("../images/switzerland.jpg"),
  require("../images/ireland.jpg"),
  require("../images/italy.jpg"),
  require("../images/france.jpg"),
  require("../images/spain.jpg"),
  require("../images/greece.jpg"),
  require("../images/turkey.jpg"),
  require("../images/germany.jpg"),
  require("../images/usa.jpg")
];

export default function Countries() {
  const { t } = useTranslation(); // Initialize useTranslation hook

  return (
    <div className="countriesList row container p-2 gap-2 justify-content-center" >
      <h1 id='destinations'><span className='specialText'>{t('countries')}</span> {t('travel_to')}</h1>
      {countryList.map((country, index) => (
        <div key={index} className="country d-flex p-2 gap-2 align-items-center col-lg-3">
          <div className="flag" style={{ backgroundImage: `url(${pictures[index]})` }}></div>
          <div className="countryName fs-5 pe-2">
            {t(country)}
          </div>
        </div>
      ))}
    </div>
  );
}
