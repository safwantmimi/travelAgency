// import React from 'react';
// import { useTranslation } from 'react-i18next';
// import { supportedLngs } from '../i18n/i18n';

// function LangSwitcher() {
//   const { i18n } = useTranslation();

//   return (
//     <div className="...">
//       <div className="...">
//         <select
//         className='form-select'
//         defaultValue={Object.entries(supportedLngs)[0].code}
//         value={i18n.resolvedLanguage}
//         onChange={(e) => i18n.changeLanguage(e.target.value)}
//         >
//           {Object.entries(supportedLngs).map(([code, name]) => (
//             <option value={code} key={code}>
//                 <img
//                     src={require('../images/countriesAMFlags/web-uk.png')}
//                     style={{ width: 36 }}
//                     alt='flag'
//                 /> 
//                 {name}
//             </option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// }

// export default LangSwitcher;


import React, { useState } from "react";
import Select, { components } from "react-select";
import { useTranslation } from 'react-i18next';
import "../styles/langSwitcher.css";

const countries = [
    { value: "ar", label: "", icon: "https://unpkg.com/language-icons/icons/ar.svg" },
    { value: "en", label: "", icon: "https://unpkg.com/language-icons/icons/en.svg"}
];

const Option = (props) => (
  <components.Option {...props} className="country-option">
    <img src={props.data.icon} alt="logo" className="country-logo" />
    {props.data.label}
  </components.Option>
);

const App = () => {
  const { i18n } = useTranslation();

  const [selectedCountry, setSelectedCountry] = useState(countries.filter((el)=> {return el.value == i18n.language})[0]);

  const handleChange = (value) => {
    setSelectedCountry(value);
    i18n.changeLanguage(value.value)
  };

  const SingleValue = ({ children, ...props }) => (
    <components.SingleValue {...props}>
      <img src={selectedCountry.icon} className="selected-logo" />
      {children}
    </components.SingleValue>
  );

  return (
    <div>
      <Select
        value={selectedCountry}
        options={countries}
        onChange={handleChange}
        styles={{
          singleValue: (base) => ({
            ...base,
            display: "flex",
            alignItems: "center"
          })
        }}
        components={{
          Option,
          SingleValue
        }}
      />
    </div>
  );
};

export default App;
